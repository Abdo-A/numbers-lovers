import { connect } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  BackHandler,
  ActivityIndicator,
  ScrollView
} from "react-native";
import React, { Component } from "react";

class Output extends Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }

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
        <Text style={styles.text}>{this.props.output}</Text>
      );

    return (
      <View style={styles.container}>
        {this.props.output ? (
          output
        ) : (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "#39CCCC",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 30,
    paddingRight: 30
  },
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
