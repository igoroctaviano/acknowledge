// Dependencies
import React, { Component } from "react";
import { View, Image, Text } from "react-native";

// Styles 
import styles from "./styles";

// Assets
import assets from "app/config/assets";

export default function Tweet(props) {
  return (
    <View style={styles.item}>
      <View style={styles.container}>
        <View style={styles.profileImageContainer}>
          <Image source={assets.img.profile} style={styles.profileImage} />
        </View>
        <View style={styles.content}>
          <View style={styles.authorContent}>
            <Text style={styles.authorName}>Rafael Câmara</Text>
            <Text style={styles.tweetDetails}>@rafaelcamaram</Text>
            <Text style={styles.tweetDetails}>- 6d</Text>
          </View>
          <View style={styles.tweetContent}>
            <Text>
              Interested in #Firebase for your chat app? @DeKoServidoni shows
              how to implement it: bit.ly/2rc8p8l #ACSnippets
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.splitLine} />
    </View>
  );
}
