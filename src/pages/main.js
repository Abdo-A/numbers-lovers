import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";
import axios from "axios";
import Button from "../components/Button";
import MainHeading from "../components/MainHeading";

class Main extends Component {
  state = {
    chosenNumber: null,
    chosenNumberFact: null
  };
  componentDidMount() {
    axios
      .get("http://numbersapi.com/1")
      .then(res => {
        this.setState(() => ({
          chosenNumberFact: res.data
        }));
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <View style={styles.container}>
        {/*1st view, for heading and input*/}

        <MainHeading>What's your favorite number?</MainHeading>

        {/*2nd view, for buttons*/}

        <Button>Get a Fact</Button>
        <Button>Get a math Fact</Button>
        <Button>Get all prime numbers before</Button>
        <Button>Get Nothing</Button>
        <Button>Get Everything</Button>

        {/*3rd view, for output*/}

        <Text>Output</Text>
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
