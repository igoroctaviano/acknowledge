// Dependencies
import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Button,
  StatusBar,
  Image,
  Text
} from 'react-native';

// Styles
import styles from './styles';

// Components
import TabIcon from '../../common/TabIcon/TabIcon'
import ActionBar from './components/ActionBar/ActionBar';

export default class Home extends Component {
  static navigationOptions = { 
    tabBarLabel: 'Home', 
    tabBarIcon: TabIcon 
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ActionBar />
    )
  }
}