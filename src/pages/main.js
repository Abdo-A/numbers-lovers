import { connect } from "react-redux";
import { View, Text, StyleSheet, Keyboard, BackHandler } from "react-native";
import * as Animatable from "react-native-animatable";
import React, { Component } from "react";

import * as actions from "../store/actions";
import Button from "../components/Button";
import MainHeading from "../components/MainHeading";
import TextInput from "../components/TextInput";

class Main extends Component {
  state = {
    warning: null
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }

  handleBackButton = () => {
    this.props.history.push("/");
    return true;
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

    this.setState(() => ({
      warning: null
    }));

    if (this.props.chosenNumber) {
      this.mainView.bounceOut(500);
      setTimeout(() => {
        this.props.history.push("/output");
      }, 550);
    } else {
      this.setState(() => ({
        warning: "Please enter a number"
      }));
    }
  };

  onGetaFact = () => {
    this.onRequestClick();
    this.props.setRequest("fact");
    this.props.requestFact(this.props.chosenNumber);
  };

  onGetaMathFact = () => {
    this.onRequestClick();
    this.props.setRequest("mathFact");
    this.props.requestMathFact(this.props.chosenNumber);
  };

  onGetAllPrimeNumbersBefore = () => {
    this.onRequestClick();
    this.props.setRequest("prime");

    let sieve = [],
      i,
      j,
      primes = [];
    for (i = 2; i <= this.props.chosenNumber; ++i) {
      if (!sieve[i]) {
        // i has not been marked -- it is prime
        primes.push(i);
        for (j = i << 1; j <= this.props.chosenNumber; j += i) {
          sieve[j] = true;
        }
      }
    }

    this.props.setOutput(primes);

    if (this.props.chosenNumber == 0) {
      this.props.setOutput("Oh, really?");
    }
  };

  onGetNothing = () => {
    this.onRequestClick();
    this.props.setRequest("nothing");
    this.props.setOutput("nothing");
  };

  onGetEverything = () => {
    this.onRequestClick();
    this.props.setRequest("everything");
    this.props.setOutput(this.props.chosenNumber);
  };

  render() {
    return (
      <View style={{ backgroundColor: "#39CCCC", flex: 1 }}>
        <Animatable.View
          ref={ref => {
            this.mainView = ref;
          }}
          style={styles.container}
        >
          {/* greeting */}

          <Text style={styles.greeting}>
            Hello {this.props.currentUserName}!
          </Text>

          {/* heading */}

          <MainHeading>What's your favorite number?</MainHeading>

          {/* warning */}

          <Text>
            {this.state.warning ? (
              <Text style={styles.warning}>{this.state.warning}</Text>
            ) : (
              "Number:"
            )}
          </Text>

          {/* input */}

          <TextInput
            value={this.props.chosenNumber}
            onSetValue={this.onSetChosenNumber}
            fontSize={20}
            numeric
          />

          {/* buttons */}

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

          <Button backgroundColor="#6C4F3D" onPress={this.onGetEverything}>
            Get Everything
          </Button>

          <Button backgroundColor="#E94B3C" onPress={this.onGetNothing}>
            Get Nothing
          </Button>

          <Button
            height={80}
            width={230}
            borderRadius={80}
            border
            fontColor="#444"
            backgroundColor="#ddd"
            fontSize={24}
            onPress={() => this.props.history.push("/names")}
          >
            Our User Base
          </Button>
        </Animatable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#39CCCC",
    alignItems: "center",
    paddingTop: 50
  },
  greeting: {
    fontWeight: "bold",
    color: "#fff"
  },
  warning: {
    color: "red"
  }
});

const mapStateToProps = state => {
  return {
    chosenNumber: state.chosenNumber,
    currentUserName: state.currentUserName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setChosenNumber: number => dispatch(actions.setChosenNumber(number)),
    setRequest: request => dispatch(actions.setRequest(request)),
    setOutput: output => dispatch(actions.setOutput(output)),
    requestFact: number => dispatch(actions.requestFact(number)),
    requestMathFact: number => dispatch(actions.requestMathFact(number))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
