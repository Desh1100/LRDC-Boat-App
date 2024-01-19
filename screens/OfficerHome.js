import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const OfficerHome = () => {
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

      <View style={{ height: "20%", width: "20%", backgroundColor: "#000" }} />
      <View style={{ height: "20%", width: "20%", backgroundColor: "#000" }} />
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
  },

  bg: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorFloralwhite_100,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    alignItems: "center",
  },
});

export default OfficerHome;
