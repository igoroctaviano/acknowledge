// Dependencies
import React, { Component } from "react";
import { Text } from "react-native";

// Styles 
import styles from "./styles";

export default function Counter(props) {
  return (
    <Text style={styles.text}>
      Counter Component!! {props.text}
    </Text>
  );
}
