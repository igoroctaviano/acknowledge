// Dependencies
import React, {Component} from 'react';
import {View, TouchableHighlight, Text} from 'react-native';

// Styles
import styles from "./styles";

export default class StackMenu extends Component {
  constructor(props) {
    super(props);
  }

  MenuItem(text, action) {
    return (
      <TouchableHighlight onPress={action} style={styles.item}>
        <Text style={styles.text}>
          {text}
        </Text>
      </TouchableHighlight>
    );
  }

  render() {
    const { navigate } = this.props;

    return (
      <View style={styles.container}>
        {this.MenuItem('Syllabus', () => navigate("SyllabusPage"))}
        {this.MenuItem('Exercises', () => navigate("ExercisesPage"))}
      </View>
    );
  }
}