import React from "react";
import { useState } from "react";
import { TouchableOpacity, Alert, KeyboardAvoidingView } from "react-native";
import { View, StyleSheet, Image, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { auth } from "../firebaseconfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (email === "" || password === "") {
      Alert.alert("Error", "Please enter both email and password.");
      return;
    } else {
      try {
        // Sign in the user with email and password
        const user = await auth.signInWithEmailAndPassword(email, password);
        if (email === "admin@gmail.com" && password === "12345678") {
          navigation.navigate("OHome");
        } else if (email === "oic@gmail.com" && password === "12345678") {
          navigation.navigate("OICHome");
        } else {
          Alert.alert(
            "Error",
            " Please check your email address and password and try again."
          );
        }
      } catch (error) {
        console.error("Login error:", error);
        Alert.alert(
          "Error",
          " Please check your email address and password and try again."
        );
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerItems}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          mode="outlined"
          style={styles.input}
          autoCapitalize="none"
        />

        <TextInput
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          mode="outlined"
          style={styles.input}
        />

        <TouchableOpacity>
          <Button
            mode="contained"
            onPress={handleLogin}
            style={styles.button}
            disabled={email === "" || password === ""}
          >
            Login
          </Button>
        </TouchableOpacity>
      </View>
      <Image
        style={{
          height: "7%",
          width: "60%",
          marginTop: "40%",
        }}
        source={require("../assets/1543918947img311.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: 10,
  },

  containerItems: {
    marginTop: "40%",
    justifyContent: "center",
    alignContent: "center",
    padding: "10%",
    width: "80%",
    alignSelf: "center",
    backgroundColor: "#D9D9D9",
    // borderRadius: "25",
    height: "48%",
  },

  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
    backgroundColor: "#CB832E",
    borderWidth: 1,
    borderColor: "#fff",
    padding: 5,
    color: "white",
  },
});

export default LoginScreen;
