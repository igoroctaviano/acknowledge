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
  DrawerNavigator
} from "react-navigation";

// Routes
import routes from "app/config/routes";

// Components
import ActionBar from "app/components/common/ActionBar/ActionBar";
import DrawerContent from "app/components/common/DrawerContent/DrawerContent";
import NotificationsPage from "app/components/pages/Notifications/NotificationsPage";

import Card from "app/components/components/Card/Card";

// Assets
import assets from "app/config/assets";

// Palette
import Palette from "app/config/palette";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card />

      /* <View style={{ flex: 1 }}>
        <TabsInDrawer />
      </View> */
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
        title: "HomePage",
        drawer: () => ({
          icon: ({ tintColor }) =>
            <Image
              source={assets.ico.notifications}
              style={{ width: 24, height: 24, tintColor: tintColor }}
            />
        })
      }
    },
    Notification: {
      screen: NotificationsPage,
      navigationOptions: {
        title: "Just another page",
        drawer: () => ({
          icon: ({ tintColor }) =>
            <Image
              source={assets.ico.home}
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
