// Dependencies
import React, { Component } from "react";
import {
  Text,
  View,
  Image
} from "react-native";
import { Font } from 'expo';

// Assets
import assets from "app/config/assets";

// Styles 
import styles from "./styles";

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      keywords: "",
      content: "",
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'nunito-regular': require('../../../assets/fonts/Nunito-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={styles.frame}>
        { this.state.fontLoaded ? (
          <View style={styles.card}>
            <Image style={styles.image} source={assets.img.chemistry} />
            <View style={styles.header}>
              <Text style={styles.title}>Why we need to test?</Text>
              <Text style={styles.keywords}>Test, Testability, Software, Development</Text>
            </View>
            <Text style={styles.content}>
              Software systems are an integral part of life, from business applications (e.g., banking) to consumer products (e.g., cars).
              Most people have had an experience with software that did not work as expected. Software that does not work correctly can lead
              to many problems, including loss of money, time or business reputation, and could even cause injury or death.
            </Text>
          </View>
        ) : null }
      </View>
    );
  }
}
