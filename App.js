// Dependencies
import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Platform,
  StatusBar,
  ActivityIndicator,
  Text,
  View,
  Image,
  Button,
  ScrollView
} from "react-native";
import {
  StackNavigator,
  TabNavigator,
  DrawerNavigator,
  DrawerItems
} from "react-navigation";

// Routes
import routes from "app/config/routes";

// Components
import ActionBar from "app/components/ActionBar/index";
import DrawerContent from "app/components/DrawerContent/index";
import NotificationsPage from "app/routes/Notifications/index";

// Images
import images from "app/config/images";

// Styles
import styles from "app/config/styles";

// Palette
import Palette from "app/config/palette";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TabsInDrawer />
      </View>
    );
  }
}

const TabNav = TabNavigator(
  { ...routes },
  {
    tabBarOptions: {
      style: {
        backgroundColor: Palette.main,
        borderBottomWidth: 1,
        borderBottomColor: Palette.border
      },
      activeTintColor: Palette.accent,
      inactiveTintColor: Palette.inactive,
      showLabel: false,
      showIcon: true,
      labelStyle: {
        fontSize: 12
      },
      indicatorStyle: {
        backgroundColor: Palette.accent
      }
    },
    tabBarPosition: "top"
  }
);

const StacksOverTabs = StackNavigator({
  Root: {
    screen: TabNav,
    navigationOptions: {
      header: ({ navigate }) => <ActionBar type="search" />
    }
  }
});

const TabsInDrawer = DrawerNavigator(
  {
    StackNavigator: {
      screen: StacksOverTabs,
      navigationOptions: {
        title: "Home",
        drawer: () => ({
          icon: ({ tintColor }) =>
            <Image
              source={images.notificationsIcon}
              style={{ width: 24, height: 24, tintColor: tintColor }}
            />
        })
      }
    },
    Notification: {
      screen: NotificationsPage,
      navigationOptions: {
				style: {
					backgroundColor: Palette.main
				},
        title: "Just another page",
        drawer: () => ({
          icon: ({ tintColor }) =>
            <Image
              source={images.homeIcon}
              style={{ width: 24, height: 24, tintColor: tintColor }}
            />
        })
      }
    }
  },
  {
    drawerPosition: "left",
    contentComponent: props => <DrawerContent {...props} />,
    contentOptions: {
      activeTintColor: Palette.accent,
      activeBackgroundColor: "transparent",
      style: {
        marginVertical: 0
      },
      labelStyle: {
        fontSize: 20,
        fontWeight: "normal"
      }
    }
  }
);
