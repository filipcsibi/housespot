import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Image,
} from "react-native";

export const EVButton = ({ press }) => {
  const baterie = require("../assets/battery.png");
  return (
    <Pressable
      style={{
        alignItems: "center",
        flexDirection: "row",
        left: "50%",
        top: "85%",
        position: "absolute",
        height: "7%",
        margin: 20,
        width: "40%",
        backgroundColor: "white",
        borderRadius: 30,
        shadowColor: "rgba(0, 0, 0, 0.5)",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 3,
      }}
      onPress={() => {
        press = 0.005;
      }}
    >
      <Image
        source={baterie}
        style={{ height: 50, width: 50, marginLeft: 5 }}
      ></Image>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#16ca2d" }}>
        CHARGE
      </Text>
    </Pressable>
  );
};
