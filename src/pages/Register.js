import { connect } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  ActivityIndicator
} from "react-native";
import React, { Component } from "react";

import * as actions from "../store/actions";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

class Register extends Component {
  state = {
    welcomeMessage: null,
    warning: null,
    loading: false
  };

  componentDidMount() {
    this.props.getUsersNames();
  }

  componentWillUnmount() {
    this.setState(() => ({
      loading: false
    }));
  }

  onSetUserName = name => {
    if (isNaN(parseFloat(name))) {
      this.props.setCurrentUserName(name);
    } else {
      return;
    }
  };

  onGoButtonPress = () => {
    Keyboard.dismiss();

    if (!this.props.currentUserName) {
      this.setState(() => ({
        warning: "Please enter a name"
      }));

      return;
    }

    let oldUser = false;

    if (this.props.usersNames) {
      this.props.usersNames.map(name => {
        if (name == this.props.currentUserName) {
          oldUser = true;
        }
      });

      if (oldUser) {
        this.setState(() => ({
          welcomeMessage: "You are an old user.. Welcome!",
          loading: true
        }));

        setTimeout(() => {
          this.props.history.push("/main");
        }, 1500);
      } else {
        this.props.postCurrentUserName(this.props.currentUserName);

        this.setState(() => ({
          welcomeMessage: "You are a new user.. Welcome!",
          loading: true
        }));

        setTimeout(() => {
          this.props.history.push("/main");
        }, 1500);
      }
    } else {
      this.props.history.push("/main");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.joinUsNow}>Join us</Text>
        <Text style={styles.typeYourName}>Type your name:</Text>
        <TextInput
          marginTop={20}
          marginBottom={60}
          height={60}
          fontSize={35}
          value={this.props.currentUserName}
          onSetValue={this.onSetUserName}
        />
        <Text style={styles.warning}>{this.state.warning}</Text>

        {this.state.loading && (
          <ActivityIndicator size="large" color="#0000ff" />
        )}

        <Button height={70} width="60%" onPress={this.onGoButtonPress}>
          Go
        </Button>
        <Text style={styles.welcomeMessage}>{this.state.welcomeMessage}</Text>
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
  },
  joinUsNow: {
    color: "yellow",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 40
  },
  typeYourName: {
    fontSize: 20,
    fontWeight: "bold"
  },
  warning: {
    color: "red"
  },
  welcomeMessage: {
    color: "red",
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 20
  }
});

const mapStateToProps = state => {
  return {
    currentUserName: state.currentUserName,
    usersNames: state.usersNames
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUserName: name => dispatch(actions.setCurrentUserName(name)),
    postCurrentUserName: name => dispatch(actions.postCurrentUserName(name)),
    getUsersNames: () => dispatch(actions.getUsersNames())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
