import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

let globalProps;

const Button = props => {
  globalProps = props;
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        backgroundColor: props.backgroundColor ? props.backgroundColor : "#999",
        width: props.width ? props.width : "80%",
        height: props.height ? props.height : 40,
        borderRadius: props.borderRadius ? props.borderRadius : 5,
        borderWidth: props.border ? 1 : 0,
        alignItems: "center",
        justifyContent: "center",
        margin: 10
      }}
    >
      <Text
        style={{
          color: props.fontColor ? props.fontColor : "#fff",
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
//width (optional)
//height (optional)
//borderRadius (optional)

export default Button;
