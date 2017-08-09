// Dependencies
import React from "react";
import { Image } from "react-native";

export default function TabIcon(props) {
  return <Image source={props.source} style={{ width: 24, height: 24, tintColor: props.tintColor }} />;
}