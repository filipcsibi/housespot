import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MapScreen from "../modules/main/components/Map";
import LoginScreen from "../modules/login/components/Login";
import React from "react";
import { BackButton } from "./BackButton";
import SearchBar from "./SearchBar";
import MainScreen from "../modules/main/components/MainScreen";
import Welcome from "../modules/welcome/welcome/components/WelcomeScreen";
const Main = createStackNavigator();

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Main.Navigator>
        <Main.Screen
          name="Welcome"
          component={Welcome}
          options={{ header: () => null }}
        />
        <Main.Screen
          name="Login"
          component={LoginScreen}
          options={{ header: () => null }}
        />
        <Main.Screen
          name="Home"
          component={MainScreen}
          options={{
            header: () => <SearchBar />,
            // headerContainerStyle: null,
          }}
        />
      </Main.Navigator>
    </NavigationContainer>
  );
};
