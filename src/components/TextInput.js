import { TextInput } from "react-native";
import React from "react";

const textInput = props => {
  return (
    <TextInput
      onChangeText={text => {
        props.onSetValue(text);
      }}
      value={props.value}
      style={{
        width: "60%",
        height: props.height ? props.height : 40,
        fontSize: props.fontSize ? props.fontSize : 15,
        borderWidth: props.border ? 1 : 0,
        backgroundColor: "#fff",
        padding: 5,
        textAlign: "center",
        marginBottom: props.marginBottom ? props.marginBottom : 30,
        marginTop: props.marginTop ? props.marginTop : 0
      }}
      keyboardType={props.numeric ? "numeric" : "default"}
    />
  );
};

//Expected props:
//value
//onSetValue

export default textInput;
