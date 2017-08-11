// Dependencies
import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Font } from 'expo';

// Component
import SwipeCards from 'react-native-swipe-cards';
import SectionCard from '../SectionCard/SectionCard';
import * as Progress from 'react-native-progress';

// Styles
import styles from "./styles";

// Content
import Syllabus from "./Syllabus";

export default class Deck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: Syllabus,
      fontLoaded: false,
      counter: 0
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'nunito-regular': require('../../../assets/fonts/Nunito-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  handleYup(card) {
    this.incrementProgressBar();
    console.log(`Yup for ${card.text}`);
  }

  handleNope(card) {
    this.incrementProgressBar();
    console.log(`Nope for ${card.text}`);
  }

  handleMaybe(card) {
    this.incrementProgressBar();
    console.log(`Maybe for ${card.text}`);
  }

  incrementProgressBar() {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }

  render() {
    // If you want a stack of cards instead of one-per-one view, activate stack mode -> stack={true}
    return (
      <View style={{ backgroundColor: "#ADD47C", flex: 1, justifyContent: "center", alignItems: "center", alignContent: "center" }}>
        <Progress.Bar progress={this.state.counter / 10} width={270} color={'white'} />
        { this.state.fontLoaded ? (
          <SwipeCards
            cards={this.state.data}

            renderCard={(cardData) => <Card {...cardData} />}
            renderNoMoreCards={() => <NoMoreCards />}

            loop={true}
            showNope={false}
            showYup={false}
            showMaybe={false}
            smoothTransition={true}
            // stack={true}

            handleYup={this.handleYup.bind(this)}
            handleNope={this.handleNope.bind(this)}
            handleMaybe={this.handleMaybe.bind(this)}
            hasMaybeAction
          />
        ) : null }
      </View>
    );
  }
}

const Card = (props) => (
  <View style={styles.container}>
    <View style={styles.card}>
      <Image style={styles.image} source={props.image}/>
      <Text style={styles.content}>{props.content}</Text>
    </View>
  </View>
);

const NoMoreCards = (props) => (
  <View>
    <Text style={{ fontSize: 22 }}>No more cards!</Text>
  </View>
);