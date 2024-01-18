import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import FormCard from "../components/FormCard";
import { Color, Border, FontFamily } from "../GlobalStyles";

const IPhone1415ProMax4 = () => {
  return (
    <View style={styles.iphone1415ProMax2}>
      <View style={[styles.iphone1415ProMax2Child, styles.frame1Layout]} />
      <FormCard />
    </View>
  );
};

const styles = StyleSheet.create({
  frame1Layout: {
    height: 184,
    width: 454,
    backgroundColor: Color.colorPalegoldenrod,
    borderBottomRightRadius: Border.br_38xl,
    position: "absolute",
  },
  frame1Position: {
    left: "50%",
    top: 0,
  },
  framePosition: {
    top: 82,
    overflow: "hidden",
  },
  frame2Layout: {
    height: 92,
    position: "absolute",
  },
  frameLayout: {
    width: 187,
    position: "absolute",
    overflow: "hidden",
  },
  homeTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  iphone1415ProMax2Child: {
    top: 856,
    left: -24,
  },
  iphone1415ProMax2: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorFloralwhite_100,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default IPhone1415ProMax4;
