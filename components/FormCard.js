import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Border, Color } from "../GlobalStyles";

const FormCard = () => {
  return (
    <View style={styles.frame}>
      <View style={styles.frameParent}>
        <View style={styles.rectangleFlexBox}>
          <View style={styles.frameChild} />
          <View style={styles.frameChild} />
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleFlexBox]}>
          <View style={styles.frameChild} />
          <View style={styles.frameChild} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    width: 377,
    alignItems: "center",
  },
  frameChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGainsboro_100,
    width: 175,
    height: 245,
  },
  rectangleGroup: {
    marginTop: 68,
  },
  frameParent: {
    marginLeft: -163.5,
    top: 0,
    left: "50%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  frame: {
    top: 232,
    left: -24,
    width: 427,
    height: 558,
    overflow: "hidden",
    position: "absolute",
  },
});

export default FormCard;
