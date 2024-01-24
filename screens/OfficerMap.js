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
          latitude: 6.9053542,
          longitude: 79.9097899,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("OHome")}>
          <Ionicons
            name="arrow-back-circle"
            size={40}
            color="black"
            style={{ marginTop: 30, marginLeft: 15 }}
          />
        </TouchableOpacity>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
