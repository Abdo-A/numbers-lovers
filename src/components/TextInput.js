import { TextInput } from "react-native";
import React from "react";

const textInput = props => {
  return (
    <TextInput
      onChangeText={text => {
        props.onSetChosenNumber(text);
      }}
      value={props.chosenNumber}
      style={{
        width: "60%",
        borderWidth: 1,
        backgroundColor: "#fff",
        padding: 5,
        textAlign: "center",
        marginBottom: 30
      }}
      keyboardType="numeric"
    />
  );
};

export default textInput;
