import { connect } from "react-redux";

import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  BackHandler,
  ActivityIndicator
} from "react-native";
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

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <Text style={styles.heading}>
            We are proud of our amazing members: {"\n"}
          </Text>

          <Text style={styles.namesContainer}>
            {this.props.usersNames
              ? this.props.usersNames.map((name, i) => {
                  return (
                    <Text style={styles.name} key={name}>
                      {i + 1}- {name} {"\n"}
                    </Text>
                  );
                })
              : ""}
          </Text>

          {this.props.usersNames ? (
            <View />
          ) : (
            <View>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#39CCCC",
    borderWidth: 20,
    borderColor: "brown"
  },
  scrollContainer: { marginTop: 30 },
  namesContainer: {
    textAlign: "center"
  },
  heading: {
    textAlign: "center",
    fontFamily: "sans-serif-condensed",
    fontWeight: "bold"
  },
  name: {
    marginTop: 20,
    marginBottom: 20,
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold"
  }
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
