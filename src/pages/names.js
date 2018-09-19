import { connect } from "react-redux";
import { View, Text, StyleSheet, BackHandler } from "react-native";
import React, { Component } from "react";

import * as actions from "../store/actions";

class Names extends Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);

    this.props.getUsersNames();
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
  }

  handleBackButton = () => {
    this.props.history.push("/main");
    return true;
  };

  love = [];

  render() {
    if (this.props.usersNames) {
      console.log(typeof this.props.usersNames[0]);
      console.log(this.props.usersNames);
      this.love = this.props.usersNames[3];
    }
    return (
      <View style={styles.container}>
        <Text>Names</Text>

        <Text>
          {this.props.usersNames
            ? this.props.usersNames.map(name => {
                return (
                  <Text style={styles.name} key={name}>
                    {name} {"\n"}
                  </Text>
                );
              })
            : ""}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#39CCCC",
    alignItems: "center",
    paddingTop: 80,
    overflow: "scroll"
  },
  name: {}
});

const mapStateToProps = state => {
  return {
    usersNames: state.usersNames
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsersNames: () => dispatch(actions.getUsersNames())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Names);
