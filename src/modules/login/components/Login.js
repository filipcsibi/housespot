import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const desiredWidth = (43 / 100) * screenWidth;

const screenHeight = Dimensions.get("window").height;
const desiredHeight = (20 / 100) * screenHeight;

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };
  const imagine = require("../assets/logo.jpeg");
  return (
    <View style={styles.container}>
      <Image
        source={imagine}
        style={{
          width: desiredWidth,
          height: desiredHeight,
          borderRadius: 100,
          marginBottom: 50,
        }}
        resizeMode="cover"
      ></Image>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Pressable
        onPress={handleLogin}
        style={{
          marginTop: 20,
          height: 50,
          width: 200,
          backgroundColor: "white",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#012a44" }}>
          {" "}
          Login
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00b4ff",
    height: "100%",
    width: "100%",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: 300,
    height: 50,
    marginBottom: 15,
    paddingLeft: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
});
