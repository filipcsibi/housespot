import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  Image,
} from "react-native";

export const ParkButton = ({ press }) => {
  const parcare = require("../assets/parkspot.png");
  return (
    <Pressable
      style={{
        flexDirection: "row",
        alignItems: "center",
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
        (press = 0.005), console.log("asd");
      }}
    >
      <Image
        source={parcare}
        style={{ height: 35, width: 55, marginRight: 5, marginLeft: 10 }}
      ></Image>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "#1361aa" }}>
        PARK
      </Text>
    </Pressable>
  );
};
