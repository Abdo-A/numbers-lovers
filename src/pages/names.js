import { View, Text, StyleSheet, BackHandler } from "react-native";
import React, { Component } from "react";

class Names extends Component {
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
        <Text>I am names page</Text>
        <Text>-> Ahmed</Text>
        <Text>-> Moha</Text>
        <Text>-> Abdo</Text>
        <Text>-> Gamma</Text>
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

export default Names;
