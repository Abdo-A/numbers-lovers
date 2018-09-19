import { connect } from "react-redux";
import { View, StyleSheet, Keyboard } from "react-native";
import axios from "axios";
import React, { Component } from "react";

import * as actions from "../store/actions";
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
      this.props.setChosenNumber(num);
    } else {
      return;
    }
  };

  onRequestClick = () => {
    Keyboard.dismiss();
    this.props.history.push("/output");
  };

  onGetaFact = () => {
    this.onRequestClick();

    this.props.setRequest("fact");

    axios
      .get("http://numbersapi.com/" + this.state.chosenNumber)
      .then(res => {
        if (this.state.request === "fact") this.props.setOutput(res.data);
      })
      .catch(error => console.log(error, "errorrr"));
  };

  onGetaMathFact = () => {
    this.onRequestClick();

    this.props.setRequest("mathFact");

    axios
      .get("http://numbersapi.com/" + this.state.chosenNumber + "/math")
      .then(res => {
        if (this.state.request === "mathFact") this.props.setOutput(res.data);
      })
      .catch(error => console.log(error, "errorrrr"));
  };

  onGetAllPrimeNumbersBefore = () => {
    this.onRequestClick();

    this.props.setRequest("prime");

    this.props.setOutput("prime");
  };

  onGetNothing = () => {
    this.onRequestClick();

    this.props.setRequest("nothing");

    this.props.setOutput("nothing");
  };

  onGetEverything = () => {
    this.onRequestClick();

    this.props.setRequest("everything");

    this.props.setOutput("everything");
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

        <Button
          height={80}
          width={150}
          borderRadius={80}
          border
          fontColor="#444"
          backgroundColor="#fff"
          onPress={() => this.props.history.push("/names")}
        >
          Our Users Names
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#39CCCC",
    alignItems: "center",
    paddingTop: 60
  }
});

const mapDispatchToProps = dispatch => {
  return {
    setChosenNumber: num => dispatch(actions.setChosenNumber(num)),
    setRequest: request => dispatch(actions.setRequest(request)),
    setOutput: output => dispatch(actions.setOutput(output))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Main);
