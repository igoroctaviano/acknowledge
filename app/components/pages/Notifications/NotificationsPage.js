// Dependencies
import React, { Component } from "react";
import { View, Button, StatusBar, Image } from "react-native";

// Components 
import Counter from "app/components/common/Counter/index";

// Styles 
import styles from "./styles";

// Assets
import assets from "app/config/assets";

export default class NotificationsPage extends Component {
  static navigationOptions = {
    tabBarLabel: "Notifications",
    tabBarIcon: ({ tintColor }) =>
      <Image
        source={assets.img.notificationsIcon}
        style={{ width: 24, height: 24, tintColor: tintColor }}
      />
  };

  render() {
		const { navigate } = this.props.navigation;
		
    return (
      <View style={styles.container}>
        <Counter text="Notifications" />
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
