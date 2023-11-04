import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export const BackButton = ({ navigation }) => {
  return (
    <Pressable onPress={() => navigation.goBack()}>
      <Text style={{ color: "white" }}>Back</Text>
    </Pressable>
  );
};
