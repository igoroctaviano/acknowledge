// Dependencies
import React, { Component } from "react";
import { View, Button, Image } from "react-native";

// Components 
import Counter from "app/components/common/Counter/Counter";

// Styles 
import styles from "./styles";

// Assets
import assets from "app/config/assets";

export default class MessagesPage extends Component {
  static navigationOptions = {
    tabBarLabel: "MessagesPage",
    tabBarIcon: ({ tintColor }) =>
      <Image
        source={assets.img.messages}
        style={{ width: 24, height: 24, tintColor: tintColor }}
      />
	};

  render() {
		const { navigate } = this.props.navigation;
		
    return (
      <View style={styles.container}>
        <Counter text="Messages" />
        <Button
          title="Go to Jane's profile"
          onPress={() => {
            navigate("DrawerOpen", { name: "Home props" });
          }}
        />
      </View>
    );
  }
}
