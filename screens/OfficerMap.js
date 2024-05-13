import React from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 6.903806,
          longitude: 79.9079,
          latitudeDelta: 0.00092,
          longitudeDelta: 0.00421,
        }}
      >
        <Marker
          coordinate={{ latitude: 6.903471, longitude: 79.907679 }}
          title={"Diyathma Boat"}
        />
        <Marker
          coordinate={{ latitude: 6.904377, longitude: 79.907877 }}
          title={"boat"}
        />
      </MapView>
      <TouchableOpacity onPress={() => navigation.navigate("OHome")}>
        <Ionicons
          name="arrow-back-circle"
          size={40}
          color="black"
          style={{ position: "absolute", top: 30, left: 15 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
