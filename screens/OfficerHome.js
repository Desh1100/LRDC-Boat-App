import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const OfficerHome = ({ navigation }) => {
  return (
    <View style={styles.bg}>
      <View style={styles.headerA}>
        <Image
          style={styles.lrdcLogo3}
          contentFit="cover"
          source={require("../assets/lrdc-logo-2.png")}
        />
        <View style={{ left: "25%", top: -20 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            LRDC BOAT APP
          </Text>
          <Text>Home</Text>
        </View>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.box}>
          <Ionicons name="bookmarks" size={65} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <FontAwesome name="calendar" size={63} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate("OfficerMap")}
        >
          <MaterialCommunityIcons
            name="map-marker-check"
            size={75}
            color="black"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.box}>
          <MaterialIcons name="message" size={65} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerA: {
    borderBottomRightRadius: Border.br_38xl,
    width: "100%",
    height: "18%",
    backgroundColor: Color.colorPalegoldenrod,
  },

  lrdcLogo3: {
    top: "30%",
    width: "20%",
    height: "65%",
    marginLeft: 10,
  },

  bg: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorFloralwhite_100,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  box: {
    width: "35%", // Set box width to half of the screen width
    height: 200, // Set a fixed height for the boxes
    borderWidth: 1,
    borderColor: "black",
    margin: "5%",
    top: "10%",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default OfficerHome;
