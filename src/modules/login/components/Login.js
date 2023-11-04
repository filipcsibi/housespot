import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // You can use a different icon library if preferred

function LoginScreen({ navigation }) {
  const handleLogin = () => {
    // You can add your login logic here
    // For the prototype, you can simply log in the user
    console.log("User logged in");
  };

  return (
    <ImageBackground
      source={require("../assets/background.png")} // Replace with the actual path to your background image
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.loginText}>Login</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <View style={styles.inputWrapper}>
            <Icon name="user" size={20} color="gray" style={styles.icon} />
            <TextInput style={styles.input} placeholder="Type your username" />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputWrapper}>
            <Icon name="lock" size={20} color="gray" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Type your password"
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity onPress={() => console.log("Forgot Password?")}>
            <Text style={styles.forgotPasswordLink}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>Or Log in with</Text>
        <View style={styles.socialIconsContainer}>
          <TouchableOpacity
            style={styles.socialGoogle}
            onPress={() => {
              // Handle Google login
            }}
          >
            <Icon name="google" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialFacebook}
            onPress={() => {
              // Handle Facebook login
            }}
          >
            <Icon name="facebook" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialTwitter}
            onPress={() => {
              // Handle Twitter login
            }}
          >
            <Icon name="twitter" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover", // You can adjust the image style as needed
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    shadowColor: "black", // For iOS
    shadowOffset: { width: 0, height: 2 }, // For iOS
    shadowOpacity: 0.3, // For iOS
    shadowRadius: 8, // For iOS
    color: "white",
    paddingBottom: 20,
    fontSize: 32,
    fontWeight: "thin",
    marginBottom: 20,
  },
  inputContainer: {
    paddingRight: 20,
    marginBottom: 15,
  },
  label: {
    paddingLeft: 40,
    paddingBottom: 10,
    color: "gray",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    paddingRight: 10,
  },
  input: {
    shadowColor: "black", // For iOS
    shadowOffset: { width: 0, height: 2 }, // For iOS
    shadowOpacity: 0.3, // For iOS
    shadowRadius: 3, // For iOS
    paddingLeft: 10,
    height: 40,
    width: 300,
    backgroundColor: "white",
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
  },
  button: {
    shadowColor: "black", // For iOS
    shadowOffset: { width: 0, height: 2 }, // For iOS
    shadowOpacity: 0.3, // For iOS
    shadowRadius: 2, // For iOS
    width: 300,
    height: 40,
    backgroundColor: "#08b4fe",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 17,
  },
  forgotPasswordLink: {
    paddingTop: 7,
    paddingLeft: 200,
    color: "grey",
  },
  orText: {
    marginTop: 20,
    color: "gray",
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 200,
    marginTop: 10,
  },
  socialGoogle: {
    backgroundColor: "#DB4437",
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  socialFacebook: {
    backgroundColor: "#4267B2",
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  socialTwitter: {
    backgroundColor: "#1DA1F2",
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
