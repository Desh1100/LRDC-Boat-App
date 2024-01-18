import * as React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const IPhone1415ProMax3 = () => {
  return (
    <View style={styles.iphone1415ProMax3}>
      <ImageBackground
        style={styles.image1Icon}
        resizeMode="cover"
        source={require("../assets/image1.png")}
      />
      <View style={[styles.iphone1415ProMax3Child, styles.lrdcLogo3Position]} />
      <Image
        style={[styles.lrdcLogo3, styles.lrdcLogo3Position]}
        contentFit="cover"
        source={require("../assets/lrdc-logo-2.png")}
      />
      <Text style={[styles.lrdcBoatApp, styles.mapTypo]}>LRDC BOAT APP</Text>
      <Text style={[styles.map, styles.mapTypo]}>MAP</Text>
      <Image
        style={styles.iphone1415ProMax3Item}
        contentFit="cover"
        source={require("../assets/group-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lrdcLogo3Position: {
    left: "50%",
    position: "absolute",
  },
  mapTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  image1Icon: {
    top: 124,
    left: -34,
    width: 504,
    height: 825,
    position: "absolute",
  },
  iphone1415ProMax3Child: {
    marginLeft: -239,
    top: -16,
    borderBottomRightRadius: Border.br_38xl,
    backgroundColor: Color.colorPalegoldenrod,
    width: 454,
    height: 184,
  },
  lrdcLogo3: {
    marginLeft: -200,
    top: 66,
    width: 105,
    height: 92,
  },
  lrdcBoatApp: {
    top: 76,
    left: 136,
    fontSize: FontSize.size_5xl,
  },
  map: {
    top: 105,
    left: 278,
    fontSize: FontSize.size_base,
  },
  iphone1415ProMax3Item: {
    top: 79,
    left: 393,
    width: 7,
    height: 26,
    position: "absolute",
  },
  iphone1415ProMax3: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorFloralwhite_100,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default IPhone1415ProMax3;
