import React from "react";
import { Text, Platform } from "react-native";
import * as Animatable from "react-native-animatable";

const MainHeading = props => {
  return (
    <Animatable.Text
      animation="bounceIn"
      easing="ease-out"
      style={{
        fontFamily: Platform.OS === "ios" ? "System" : "sans-serif-condensed",
        color: props.fontColor ? props.fontColor : "#000",
        fontWeight: "bold",
        backgroundColor: props.backgroundColor ? props.backgroundColor : "#fff",
        fontSize: 25,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#000",
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 20
      }}
    >
      {props.children}
    </Animatable.Text>
  );
};

export default MainHeading;
