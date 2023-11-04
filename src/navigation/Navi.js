import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import MapScreen from "../modules/main/components/Map";
import LoginScreen from "../modules/login/components/Login";
import React from "react";
const Main = createStackNavigator();

export const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Main.Navigator>
        <Main.Screen
          name="Login"
          component={LoginScreen}
          options={{ header: () => null }}
        />
        <Main.Screen name="Home" component={MapScreen} />
      </Main.Navigator>
    </NavigationContainer>
  );
};
