import { connect } from "react-redux";
import * as Animatable from "react-native-animatable";

import {
  View,
  Text,
  StyleSheet,
  BackHandler,
  ActivityIndicator,
  ScrollView
} from "react-native";
import React, { Component } from "react";

let interval1;
let interval2;

class Output extends Component {
  state = {
    backgroundColor: "#39CCCC",
    animationType: "shake",
    fontSize: 30
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);

    if (this.props.request === "nothing") {
      this.setState(() => ({
        animationType: ""
      }));
    }

    if (this.props.request === "everything") {
      interval2 = setInterval(() => this.setRandomAnimationType(), 500);
      let fontSize = 400;
      if (parseInt(this.props.chosenNumber) > 9) {
        fontSize = 200;
      }

      if (parseInt(this.props.chosenNumber) > 99) {
        fontSize = 120;
      }

      this.setState(() => ({
        fontSize: fontSize
      }));
    }

    if (
      this.props.request === "everything" ||
      this.props.request === "nothing"
    ) {
      interval1 = setInterval(() => this.setRandomBackgroundColor(), 200);
    }
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);

    clearInterval(interval1);
    clearInterval(interval2);
  }

  setRandomBackgroundColor = () => {
    //generating a random color:
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    this.setState(() => ({
      backgroundColor: color
    }));
  };

  setRandomAnimationType = () => {
    const animationTypes = [
      "tada",
      "bounce",
      "flash",
      "jello",
      "pulse",
      "shake",
      "bounceIn",
      "bounceInDown",
      "bounceInUp",
      "fadeOut",
      "flipInY"
    ];

    let i =
      Math.floor(Math.random() * (animationTypes.length - 0 /*min*/ + 1)) +
      0 /*min*/;

    this.setState(() => ({
      animationType: animationTypes[i]
    }));
  };

  handleBackButton = () => {
    this.props.history.push("/main");
    return true;
  };

  render() {
    output =
      this.props.request === "prime" &&
      typeof this.props.output !== "string" ? (
        <ScrollView
          style={{
            width: "100%",
            marginTop: parseInt(this.props.chosenNumber) < 20 ? 140 : 40
          }}
        >
          {this.props.output.map(number => (
            <Text key={number} style={styles.text}>
              {number}
              {"\n"}
            </Text>
          ))}
        </ScrollView>
      ) : (
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: this.state.fontSize,
            textAlign: "center"
          }}
        >
          {this.props.output}
        </Text>
      );

    return (
      <View style={{ backgroundColor: this.state.backgroundColor, flex: 1 }}>
        <Animatable.View
          animation={this.state.animationType}
          iterationCount={1}
          direction="alternate"
          duration={500}
          style={{
            flex: 1,
            display: "flex",
            backgroundColor: this.state.backgroundColor,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 30,
            paddingRight: 30
          }}
        >
          {this.props.output ? (
            output
          ) : (
            <ActivityIndicator size="large" color="#0000ff" />
          )}
        </Animatable.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center"
  }
});

const mapStateToProps = state => {
  return {
    request: state.request,
    chosenNumber: state.chosenNumber,
    output: state.output
  };
};

export default connect(
  mapStateToProps,
  null
)(Output);
