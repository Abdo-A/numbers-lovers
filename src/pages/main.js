import { Text, View } from "react-native";
import React, { Component } from "react";
import axios from "axios";

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
      <View>
        <Text>I am main page</Text>
        <Text>{this.state.chosenNumberFact}</Text>
      </View>
    );
  }
}

export default Main;
