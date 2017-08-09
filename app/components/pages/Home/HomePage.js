// Dependencies
import React, { Component } from "react";
import { View, ScrollView, Button, StatusBar, Image, Text } from "react-native";

// Components
import Tweet from "app/components/common/Tweet/index";

// Styles
import styles from "./styles";

// Assets
import assets from "app/config/assets";

export default class HomePage extends Component {
  static navigationOptions = {
    tabBarLabel: "HomePage",
    tabBarIcon: ({ tintColor }) =>
      <Image
        source={assets.img.home}
        style={{ width: 24, height: 24, tintColor: tintColor }}
      />
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView
        horizontal={false}
        endFillColor="blue"
        style={styles.container}
      >
        {[...Array(10)].map((x, i) => <Tweet key={i} />)}
      </ScrollView>
    );
  }
}
