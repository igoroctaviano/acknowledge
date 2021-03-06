// Dependencies
import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableWithoutFeedback
} from "react-native";

// Assets
import assets from "app/config/assets";

// Styles 
import styles from "./styles";

// Components 
import SearchInput from "./objects/SearchInput/index";

export default class ActionBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      type: "home",
      textTitle: "Twitter Feed"
    };
  }

  componentWillMount() {
    const type = this.props.type;
    let textTitle = "";

    switch (type) {
      case "notifications": {
        textTitle = "Notifications";
        break;
      }
      case "search":
        textTitle = "Search";
        break;
      case "messages":
        textTitle = "MessagesPage";
        break;
      default:
        textTitle = "Twitter Feed";
        break;
    }

    this.setState({
      type: type,
      textTitle: textTitle
    });
  }

  onPressProfileImage() {
    console.warn(this.props);
  }

  render() {
    const { textTitle, type } = this.state;
    
    return (
      <View style={styles.actionBar}>
        <TouchableWithoutFeedback
          onPress={this.onPressProfileImage.bind(this)}
        >
          <Image style={styles.profileImage} source={assets.img.profile} />
        </TouchableWithoutFeedback>
        {type === "search"
          ? <SearchInput />
          : <Text style={styles.titleText}>
              {textTitle}
            </Text>}
      </View>
    );
  }
}
