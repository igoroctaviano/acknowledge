// Dependencies
import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { DrawerItems } from "react-navigation";

// Styles 
import styles from "./styles";

// Assets
import assets from "app/config/assets";

export default function DrawerContent(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.profileImage} source={assets.img.profile} />
      <DrawerItems {...props} />
    </View>
  );
}
