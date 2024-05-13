import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { StyleSheet, View, Image } from "react-native";
import { Border } from "../GlobalStyles";

const Splash = () => {
  const [isGo, setIsGo] = useState(true);
  const Navigation = useNavigation();

  useEffect(() => {
    if (isGo === true) {
      setTimeout(() => {
        Navigation.navigate("Login");
      }, 3000);
    }
  });
  return (
    <View style={styles.bg}>
      <Image
        style={styles.lrdcLogo1}
        // resizeMode="cover"
        source={require("../assets/lrdclogo1.png")}
      />
      <Image
        style={{
          height: "9%",
          width: "70%",
          marginTop: "90%",
        }}
        // resizeMode="cover"
        source={require("../assets/1543918947img311.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lrdcLogo1: {
    width: 151,
    height: 150,
  },

  bg: {
    borderRadius: Border.br_6xl,
    backgroundColor: "#fdfbf0",
    flex: 1,
    width: "100%",
    overflow: "hidden",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: "30%",
  },
});

export default Splash;
