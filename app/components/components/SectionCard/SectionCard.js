// Dependencies
import React from 'react';
import { Text, View } from 'react-native';

// Styles
import styles from "./styles";

export default function SectionCard(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.keywords}>{props.keywords}</Text>
    </View>
  );
}