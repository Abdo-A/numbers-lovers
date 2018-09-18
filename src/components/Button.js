import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

let globalProps;

const Button = props => {
  globalProps = props;
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.backgroundColor ? props.backgroundColor : "#fff",
        width: "80%",
        height: 40,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        margin: 10
      }}
    >
      <Text
        style={{
          color: props.fontColor ? props.fontColor : "#000",
          fontWeight: "bold"
        }}
      >
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

//Expected props:
//children
//fontColor (optional)
//backgroundColor (optional)

export default Button;
