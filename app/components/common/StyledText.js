// Dependencies
import React, { Component } from "react";
import {
  View,
  Text,
} from "react-native";
import { Font } from 'expo';

export default class StyledText extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'nunito-regular': require('../../assets/fonts/Nunito-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  concat(a, b) {
    for (var key in b) {
      a[key] = b[key];
    }
    return a;
  }

  render() {
    return (
      <View>
        { this.state.fontLoaded ? (
          <Text style={this.concat({ fontFamily: "nunito-regular"}, this.props.style)}>
            {this.props.children}
          </Text>
        ) : null }
      </View>
    );
  }
};
