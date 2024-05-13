import React, { useState } from "react";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";
import { fdb } from "../firebaseconfig";
import { Ionicons } from "@expo/vector-icons";

import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Button,
  Alert,
  ActivityIndicator,
} from "react-native";

const CompletedTours = ({ navigation }) => {
  const [bookings, setBookings] = React.useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    // Simulating a time-consuming operation
    setTimeout(() => {
      setLoading(false);
      // Once data is fetched or operation is completed, setLoading(false)
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

  // Function to delete a booking by ID and move it to Completed collection
  const completeBooking = async (bookingId, bookingData) => {
    // Show confirmation dialog before deletion
    Alert.alert(
      "Trip confirmation ",
      "Did you complete this trip?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "YES",
          onPress: async () => {
            try {
              // Move booking data to Completed collection
              await setDoc(doc(fdb, "Completed", bookingId), bookingData);
              // Delete booking from original collection
              await deleteDoc(doc(fdb, "Dates", bookingId));
              console.log(
                "Document successfully moved to Completed and deleted!"
              );
              // After deletion, update the bookings state to reflect the change
              setBookings((prevBookings) =>
                prevBookings.filter((booking) => booking.id !== bookingId)
              );
            } catch (error) {
              console.error("Error completing booking: ", error);
            }
          },
          style: "destructive",
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.background}>
      <View style={styles.headerA}>
        <Image
          style={styles.lrdcLogo3}
          contentFit="cover"
          source={require("../assets/lrdc-logo-2.png")}
        />
        <View style={{ left: "28%", top: "50%" }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            LRDC BOAT APP
          </Text>
          <Text>OIC Home</Text>
        </View>

        <FlatList
          style={{
            position: "absolute",
            width: "100%",
            // height: "72%",
            marginTop: "40%",
            marginBottom: 200,
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
    </View>
  );
};

const styles = StyleSheet.create({
  headerA: {
    borderBottomRightRadius: Border.br_38xl,
    width: "100%",
    height: "20%",
    backgroundColor: Color.colorPalegoldenrod,
    borderBottomWidth: 5,
    borderRightWidth: 2,
    borderColor: "#525252",
  },
  lrdcLogo3: {
    top: "20%",
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

  lrdcLogo3: {
    marginLeft: -200,
    top: 50,
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

  rectangleView: {
    top: 401,
  },

  background: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorFloralwhite_100,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
  loading: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(255, 255, 255, 0.5)", // semi-transparent background
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CompletedTours;
