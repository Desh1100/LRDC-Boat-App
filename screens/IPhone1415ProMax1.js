import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const IPhone1415ProMax1 = () => {
  return (
    <View style={styles.iphone1415ProMax5}>
      <View style={[styles.iphone1415ProMax5Child, styles.lrdcLogo3Position]} />
      <Image
        style={[styles.lrdcLogo3, styles.lrdcLogo3Position]}
        contentFit="cover"
        source={require("../assets/lrdc-logo-2.png")}
      />
      <Text style={[styles.lrdcBoatApp, styles.detailsTypo]}>
        LRDC BOAT APP
      </Text>
      <Text style={[styles.details, styles.detailsTypo]}>DETAILS</Text>
      <View style={[styles.iphone1415ProMax5Item, styles.iphone1415Position]} />
      <View
        style={[styles.iphone1415ProMax5Inner, styles.iphone1415Position]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lrdcLogo3Position: {
    left: "50%",
    position: "absolute",
  },
  detailsTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  iphone1415Position: {
    width: 350,
    marginLeft: -175,
    left: "50%",
    position: "absolute",
  },
  iphone1415ProMax5Child: {
    marginLeft: -239,
    top: -16,
    borderBottomRightRadius: Border.br_38xl,
    width: 454,
    height: 184,
    backgroundColor: Color.colorPalegoldenrod,
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
  details: {
    top: 105,
    left: 259,
    fontSize: FontSize.size_base,
  },
  iphone1415ProMax5Item: {
    top: 826,
    borderRadius: Border.br_31xl,
    height: 67,
    backgroundColor: Color.colorPalegoldenrod,
  },
  iphone1415ProMax5Inner: {
    top: 224,
    borderRadius: Border.br_xl,
    backgroundColor: "#fdf0c5",
    height: 541,
  },
  iphone1415ProMax5: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorFloralwhite_100,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default IPhone1415ProMax1;
