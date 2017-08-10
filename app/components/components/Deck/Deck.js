// Dependencies
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

// Component
import SwipeCards from 'react-native-swipe-cards';

// Styles
import styles from "./styles";

// Assets
import assets from "app/config/assets"

function Card(props) {
  return (
    <View style={[styles2.card, {backgroundColor: props.backgroundColor}]}>
      <Text>{props.text}</Text>
    </View>
  );
}

function CustomizedCard(props) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={assets.img.chemistry}/>
      <View style={styles.header}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.keywords}>{props.keywords}</Text>
      </View>
      <Text style={styles.content}>{props.content}</Text>
    </View>
  );
}

const content = [
  { title: "Why we need to test?",
    keywords: "Test, Testability, Software, Development",
    content: "Software..Software..Software..Software..Software..Software..Software..Software..Software..Software..Software.." },
  { title: "Why we need to test?",
    keywords: "Test, Testability, Software, Development",
    content: "Software..Software..Software..Software..Software..Software..Software..Software..Software..Software..Software.." }
];

function NoMoreCards(props) {
  return (
    <View>
      <Text style={styles2.noMoreCardsText}>No more cards!</Text>
    </View>
  );
}

const data = [
  {text: 'Tomato', backgroundColor: 'red'},
  {text: 'Aubergine', backgroundColor: 'purple'},
  {text: 'Courgette', backgroundColor: 'green'},
  {text: 'Blueberry', backgroundColor: 'blue'},
  {text: 'Umm...', backgroundColor: 'cyan'},
  {text: 'orange', backgroundColor: 'orange'},
];

export default React.createClass({
  getInitialState() {
    return {
      cardsData: content
    }
  },
  handleYup (card) {
    console.log(`Yup for ${card.text}`);
  },
  handleNope (card) {
    console.log(`Nope for ${card.text}`);
  },
  handleMaybe (card) {
    console.log(`Maybe for ${card.text}`);
  },
  render() {
    // If you want a stack of cards instead of one-per-one view, activate stack mode
    // stack={true}
    return (
      <View style={{ backgroundColor: "#A5D299", flex: 1 }}>
        <SwipeCards
          cards={this.state.cardsData}

          renderCard={(cardData) => <CustomizedCard {...cardData} />}
          renderNoMoreCards={() => <NoMoreCards />}

          loop={true}

          handleYup={this.handleYup}
          handleNope={this.handleNope}
          handleMaybe={this.handleMaybe}
          hasMaybeAction
        />
      </View>
    );
  }
})

const styles2 = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
  },
  noMoreCardsText: {
    fontSize: 22,
  }
});