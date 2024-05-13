import React, { useState } from "react";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";
import { fdb } from "../firebaseconfig";
import { Ionicons } from "@expo/vector-icons";

import { getDocs, collection } from "firebase/firestore";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

const CompletedTours = ({ navigation }) => {
  const [bookings, setBookings] = React.useState([]);

  const fetchData = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time as needed
  };

  React.useEffect(() => {
    const fetchBookings = async () => {
      try {
        const bookingsCollection = await getDocs(collection(fdb, "Completed"));
        const bookingData = bookingsCollection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(bookingData);
        setBookings(bookingData);
      } catch (error) {
        console.error("Error fetching bookings: ", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <View style={styles.background}>
      <View style={styles.headerA}>
        <Image
          style={styles.lrdcLogo3}
          contentFit="cover"
          source={require("../assets/lrdc-logo-2.png")}
        />
        <View style={{ left: "28%", top: -28 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            LRDC BOAT APP
          </Text>
          <Text>Completed Tours</Text>
        </View>
      </View>
      <FlatList
        style={{
          flex: 1,
          // position: "absolute",
        }}
        data={bookings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("OfficerCalender");
              console.log("Item pressed:", item);
            }}
          >
            <View
              style={{
                margin: 10,
                padding: 20,
                backgroundColor: Color.colorPalegoldenrod2,
                borderRadius: 10,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Date: {item.date}
                  </Text>
                  <Text>Name: {item.name}</Text>
                  <Text>Phone Number: {item.telNum}</Text>
                </View>

                <View style={{ left: 130, flexDirection: "row" }}>
                  <Ionicons
                    name="checkmark-done-circle-outline"
                    size={45}
                    color="green"
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerA: {
    borderBottomRightRadius: Border.br_38xl,
    width: "100%",
    height: "18%",
    padding: 10,
    backgroundColor: Color.colorPalegoldenrod,
    borderBottomWidth: 5,
    borderRightWidth: 2,
    borderColor: "#525252",
    justifyContent: "center",
  },
  lrdcLogo3: {
    top: "30%",
    width: "20%",
    height: "65%",
    marginLeft: 10,
  },

  background: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorFloralwhite_100,
    flex: 1,
  },
});

export default CompletedTours;
