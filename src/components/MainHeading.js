import React from "react";
import { Text } from "react-native";

const MainHeading = props => {
  return (
    <Text
      style={{
        fontFamily: "sans-serif-condensed",
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
    </Text>
  );
};

export default MainHeading;
