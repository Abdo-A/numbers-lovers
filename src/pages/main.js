import { Text, View, StyleSheet, Keyboard } from "react-native";
import axios from "axios";
import React, { Component } from "react";

import Button from "../components/Button";
import MainHeading from "../components/MainHeading";
import TextInput from "../components/TextInput";

class Main extends Component {
  state = {
    request: null, //fact || mathFact || prime || everything || nothing
    chosenNumber: null,
    output: null
  };

  onSetChosenNumber = num => {
    if ((parseInt(num) == num && !num.includes(".")) || num === "") {
      this.setState({
        chosenNumber: num
      });
    } else {
      return;
    }
  };

  onRequestClick = () => {
    Keyboard.dismiss();
  };

  onGetaFact = () => {
    this.onRequestClick();

    this.setState(() => ({
      request: "fact"
    }));

    axios
      .get("http://numbersapi.com/" + this.state.chosenNumber)
      .then(res => {
        if (this.state.request === "fact")
          this.setState(() => ({
            output: res.data
          }));
      })
      .catch(error => console.log(error, "errorrr"));
  };

  onGetaMathFact = () => {
    this.onRequestClick();

    this.setState(() => ({
      request: "mathFact"
    }));

    axios
      .get("http://numbersapi.com/" + this.state.chosenNumber + "/math")
      .then(res => {
        if (this.state.request === "mathFact")
          this.setState(() => ({
            output: res.data
          }));
      })
      .catch(error => console.log(error, "errorrrr"));
  };

  onGetAllPrimeNumbersBefore = () => {
    this.onRequestClick();

    this.setState(() => ({
      request: "prime"
    }));

    this.setState(() => ({
      output: "prime"
    }));
  };

  onGetNothing = () => {
    this.onRequestClick();

    this.setState(() => ({
      request: "nothing"
    }));

    this.setState(() => ({
      output: "nothing"
    }));
  };

  onGetEverything = () => {
    this.onRequestClick();

    this.setState(() => ({
      output: "everything"
    }));

    this.setState(() => ({
      output: "everything"
    }));
  };

  render() {
    return (
      <View style={styles.container}>
        {/*1st view, for heading and input*/}

        <MainHeading>What's your favorite number?</MainHeading>

        <TextInput
          chosenNumber={this.state.chosenNumber}
          onSetChosenNumber={this.onSetChosenNumber}
        />

        {/*2nd view, for buttons*/}

        <Button backgroundColor="#766F57" onPress={this.onGetaFact}>
          Get a Fact
        </Button>
        <Button backgroundColor="#E47A2E" onPress={this.onGetaMathFact}>
          Get a math Fact
        </Button>
        <Button
          backgroundColor="#BE9EC9"
          onPress={this.onGetAllPrimeNumbersBefore}
        >
          Get all prime numbers before
        </Button>
        <Button backgroundColor="#E94B3C" onPress={this.onGetNothing}>
          Get Nothing
        </Button>
        <Button backgroundColor="#6C4F3D" onPress={this.onGetEverything}>
          Get Everything
        </Button>

        {/*3rd view, for output*/}

        <Text>{this.state.output}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#39CCCC",
    alignItems: "center",
    paddingTop: 80
  }
});

export default Main;
