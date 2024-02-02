import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const IPhone1415ProMax2 = () => {
  return (
    <View style={styles.background}>
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
      <View style={styles.iphone1415ProMax4Item} />
      <View style={[styles.iphone1415ProMax4Inner, styles.iphone1415Layout]} />
      <View style={[styles.rectangleView, styles.iphone1415Layout]} />
      <View style={[styles.iphone1415ProMax4Child1, styles.iphone1415Layout]} />
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
  lrdcBoatAppTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  iphone1415Layout: {
    height: 147,
    borderRadius: Border.br_xl,
    width: 350,
    marginLeft: -175,
    backgroundColor: Color.colorPalegoldenrod,
    left: "50%",
    position: "absolute",
  },
  iphone1415ProMax4Child: {
    marginLeft: -239,
    top: -16,
    borderBottomRightRadius: Border.br_38xl,
    width: 454,
    height: 184,
    backgroundColor: Color.colorPalegoldenrod,
    left: "50%",
    position: "absolute",
  },
  lrdcLogo3: {
    marginLeft: -200,
    top: 66,
    width: 105,
    height: 92,
    left: "50%",
    position: "absolute",
  },
  lrdcBoatApp: {
    top: 76,
    left: 136,
    fontSize: FontSize.size_5xl,
  },
  reservations: {
    top: 105,
    left: 230,
    fontSize: FontSize.size_base,
  },
  iphone1415ProMax4Item: {
    top: 826,
    borderRadius: Border.br_31xl,
    height: 67,
    width: 350,
    marginLeft: -175,
    backgroundColor: Color.colorPalegoldenrod,
    left: "50%",
    position: "absolute",
  },
  iphone1415ProMax4Inner: {
    top: 224,
  },
  rectangleView: {
    top: 401,
  },
  iphone1415ProMax4Child1: {
    top: 578,
  },
  background: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorFloralwhite_100,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default IPhone1415ProMax2;
