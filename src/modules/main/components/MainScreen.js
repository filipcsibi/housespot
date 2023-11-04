import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import MapScreen from "./Map";
import { ParkButton } from "./Park";
import { EVButton } from "./EV";

export default function MainScreen() {
  const [direct, setDirect] = useState(0.099);
  const [direct2, setDirect2] = useState(0.05);

  const handleParkButtonClick = () => {
    // Update the value of direct when the Park button is pressed
    setDirect(0.2); // Replace 0.2 with your desired value
  };

  const handleEVButtonClick = () => {
    // Update the value of direct2 when the EV button is pressed
    setDirect2(0.1); // Replace 0.1 with your desired value
  };

  return (
    <View>
      <MapScreen latitudedelta={direct} longitudedelta={direct2} />
      <ParkButton onPress={handleParkButtonClick} />
      <EVButton onPress={handleEVButtonClick} />
    </View>
  );
}
