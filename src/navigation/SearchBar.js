import React from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";

export default SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={{
          backgroundColor: "white",
          color: "black",
          fontSize: 20,
          margin: 20,
          marginTop: 25,
          marginBottom: 25,
          padding: 20,
          borderRadius: 20,
          shadowColor: "rgba(0, 0, 0, 0.5)",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.5,
          shadowRadius: 3,
          elevation: 3,
        }}
        placeholder="Search"
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "transparent",
    height: 100,
    width: "100%",
    marginTop: 40,
  },
});
