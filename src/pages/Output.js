import { connect } from "react-redux";
import { View, Text, StyleSheet, BackHandler } from "react-native";
import React, { Component } from "react";

class Output extends Component {
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

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.chosenNumber}</Text>
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

const mapStateToProps = state => {
  return {
    chosenNumber: state.chosenNumber,
    output: state.output
  };
};

export default connect(
  mapStateToProps,
  null
)(Output);
