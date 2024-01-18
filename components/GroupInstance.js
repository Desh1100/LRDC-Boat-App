import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const GroupInstance = () => {
  return (
    <View style={styles.ellipseParent}>
      <Image
        style={[styles.instanceChild, styles.instanceLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.instanceItem, styles.instanceLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.instanceInner, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconPosition]}
        contentFit="cover"
        source={require("../assets/group-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  instanceLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
    height: "26.92%",
  },
  groupIconPosition: {
    bottom: "0%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  instanceChild: {
    bottom: "73.08%",
    top: "0%",
  },
  instanceItem: {
    top: "34.62%",
    bottom: "38.46%",
  },
  instanceInner: {
    top: "73.08%",
    height: "26.92%",
    bottom: "0%",
  },
  groupIcon: {
    height: "100%",
    top: "0%",
  },
  ellipseParent: {
    width: 7,
    height: 26,
  },
});

export default GroupInstance;
