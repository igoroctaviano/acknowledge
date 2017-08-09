// Dependencies
import React, { Component } from "react";
import { View, Button, StatusBar, Image } from "react-native";

// Components
import Counter from "app/components/common/Counter/Counter";

// Styles
import styles from "./styles";

// Assets
import assets from "app/config/assets";

export default class SearchPage extends Component {
  static navigationOptions = {
    tabBarLabel: "Search",
    tabBarIcon: ({ tintColor }) =>
      <Image
        source={assets.img.searchIcon}
        style={{ width: 24, height: 24, tintColor: tintColor }}
      />
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Counter text="Search" />
        <Button
          title="Go to Jane's profile"
          onPress={() => {
            navigate("MessagesPage", { name: "Search props" });
          }}
        />
      </View>
    );
  }
}
