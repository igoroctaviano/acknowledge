// Dependencies
import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import {
  StackNavigator, 
  TabNavigator, 
  DrawerNavigator, 
  DrawerItems
} from 'react-navigation';

// Routes
import routes from './config/routes';

// Resources
import resources from './app/config/resources';

// Components
import TabIcon from '../../common/TabIcon/TabIcon'

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
				<TabsInDrawer/>
			</View>
    );
  }
}

const Navigator = TabNavigator({...routes}, {
	tabBarOptions: {
		style: {
			backgroundColor: 'white',
			borderBottomWidth: 1,
			borderBottomColor: '#D4DADE'
		},
		activeTintColor: '#1da1f2',
		inactiveTintColor: '#657786',
		showLabel: false,
		showIcon: true,
		labelStyle: { fontSize: 12 },
		indicatorStyle: { backgroundColor: "#1da1f2" }
	},
	tabBarPosition: 'top'
});

const StacksOverTabs = StackNavigator({
	Root: {
		screen: Navigator,
		navigationOptions: { 
      header: ({ navigate }) => <ActionBar type='search' /> 
    },
	}
});

const TabsInDrawer = DrawerNavigator({
	StackNavigator: {
		screen: StacksOverTabs,
		navigationOptions: {
			title: 'Home',
			drawer: () => ({ icon: TabIcon })
		}
	},
	Notification: {
		screen: NotificationsPage,
		navigationOptions: {
			title: 'Just another page',
			drawer: () => ({ icon: TabIcon })
		}
	}
}, 
{
	drawerPosition: 'left',
	contentComponent: props => <DrawerContent {...props}/>,
	contentOptions: {
		activeTintColor: '#1da1f2',
		activeBackgroundColor: 'transparent',
		style: { marginVertical: 0 },
		labelStyle: { 
      fontSize: 20, 
      fontWeight: 'normal' 
    }
	}
});