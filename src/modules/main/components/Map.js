import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import MapView, { Marker } from "react-native-maps";

import * as Location from "expo-location";
import { useState, useEffect } from "react";

export default function MapScreen() {
  const [initialRegion, setInitialRegion] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const gmarker = require("../assets/gmarker.png");
  const pmarker = require("../assets/pmarker.png");
  const [visible, setVisible] = useState(false);
  const imagine2 = require("../assets/parkare.png");
  const closeModal = () => {
    setVisible(false);
  };
  const openModal = () => {
    setVisible(true);
  };

  const EvMarker = () => (
    <View>
      <Image source={gmarker} style={{ height: 50, width: 30 }}></Image>
    </View>
  );
  const PMarker = () => (
    <View>
      <Image source={pmarker} style={{ height: 50, width: 30 }}></Image>
    </View>
  );
  const CustomMarker = () => (
    <View
      style={{
        backgroundColor: "gray",
        width: 30,
        height: 30,
        borderRadius: 15,
        opacity: 0.7,
        shadowColor: "rgba(0, 0, 0, 0.8)",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 3,
      }}
    ></View>
  );
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        setUserLocation({ latitude, longitude });
        setInitialRegion({
          latitude,
          longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        });
      }
    })();
  }, []);

  return (
    <View>
      <MapView style={styles.map} initialRegion={initialRegion}>
        <Modal
          style={{ justifyContent: "center", alignItems: "center" }}
          transparent={true}
          visible={visible}
        >
          <View
            style={{
              marginLeft: 19,
              marginTop: 180,
              width: "90%",
              height: "55%",
              backgroundColor: "white",
              borderRadius: 10,
            }}
          >
            <Image
              source={imagine2}
              style={{
                height: "50%",
                width: "100%",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
            ></Image>

            <Text style={styles.name}>Florin Dumitrache</Text>
            <Text style={styles.reviewText}>Review: 4.5/5</Text>
            <Text style={styles.powerText}>Power of Charger: 2r2W</Text>
            <Text style={styles.priceText}>Price/KWh: $0.8</Text>
          </View>
        </Modal>

        <Marker coordinate={userLocation} title="YOU" description={null}>
          <CustomMarker />
        </Marker>
        <Marker
          coordinate={
            userLocation && userLocation.latitude
              ? {
                  latitude: userLocation.latitude,
                  longitude: userLocation.longitude + 0.0005,
                }
              : null
          }
          onPress={() => console.log("pressed")}
        >
          <EvMarker></EvMarker>
        </Marker>
        <Marker
          coordinate={
            userLocation && userLocation.latitude
              ? {
                  latitude: userLocation.latitude + 0.0002,
                  longitude: userLocation.longitude + 0.0015,
                }
              : null
          }
          onPress={() => setVisible(true)}
        >
          <EvMarker></EvMarker>
        </Marker>
        <Marker
          coordinate={
            userLocation && userLocation.latitude
              ? {
                  latitude: userLocation.latitude + 0.001,
                  longitude: userLocation.longitude + 0.0005,
                }
              : null
          }
          onPress={() => setVisible(true)}
        >
          <EvMarker></EvMarker>
        </Marker>
        <Marker
          coordinate={
            userLocation && userLocation.latitude
              ? {
                  latitude: userLocation.latitude + 0.001,
                  longitude: userLocation.longitude - 0.001,
                }
              : null
          }
          onPress={() => setVisible(true)}
        >
          <EvMarker></EvMarker>
        </Marker>
        <Marker
          coordinate={
            userLocation && userLocation.latitude
              ? {
                  latitude: userLocation.latitude - 0.0005,
                  longitude: userLocation.longitude - 0.0001,
                }
              : null
          }
          onPress={() => setVisible(true)}
        >
          <PMarker></PMarker>
        </Marker>
        <Marker
          coordinate={
            userLocation && userLocation.latitude
              ? {
                  latitude: userLocation.latitude - 0.0009,
                  longitude: userLocation.longitude - 0.0009,
                }
              : null
          }
          onPress={() => setVisible(true)}
        >
          <PMarker></PMarker>
        </Marker>
        <Marker
          coordinate={
            userLocation && userLocation.latitude
              ? {
                  latitude: userLocation.latitude - 0.002,
                  longitude: userLocation.longitude - 0.001,
                }
              : null
          }
          onPress={() => setVisible(true)}
        >
          <PMarker></PMarker>
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
  detalii: {
    position: "absolute",
    backgroundColor: "red",
  },
  name: {
    paddingLeft: 10,
    fontSize: 30,
    margin: 10,
    fontWeight: "bold",
  },
  reviewText: {
    paddingLeft: 10,
    fontSize: 18,
    marginBottom: 10,
  },
  powerText: {
    paddingLeft: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  priceText: {
    paddingLeft: 10,
    paddingBottom: 10,
    fontSize: 16,
  },
});
