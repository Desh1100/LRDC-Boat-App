import * as React from "react";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";
import { fdb } from "../firebaseconfig";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";

const Bookings = ({ navigation }) => {
  const [bookings, setBookings] = React.useState([]);

  React.useEffect(() => {
    const fetchBookings = async () => {
      try {
        const bookingsCollection = await getDocs(collection(fdb, "Dates"));
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

  // Function to delete a booking by ID
  const deleteBooking = async (bookingId) => {
    // Show confirmation dialog before deletion
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete this booking?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: async () => {
            try {
              await deleteDoc(doc(fdb, "Dates", bookingId));
              console.log("Document successfully deleted!");
              // After deletion, update the bookings state to reflect the change
              setBookings((prevBookings) =>
                prevBookings.filter((booking) => booking.id !== bookingId)
              );
            } catch (error) {
              console.error("Error deleting document: ", error);
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
          <Text>Bookings</Text>
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
                  backgroundColor: Color.colorPalegoldenrod1,
                  borderRadius: 10,
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  Date: {item.date}
                </Text>
                <Text>Name: {item.name}</Text>
                <Text>Phone Number: {item.telNum}</Text>
                <View style={{ left: 220, flexDirection: "row" }}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("EditBookings");
                      // console.log("Item pressed:", item);
                    }}
                    style={{
                      marginLeft: 20,
                      backgroundColor: "white",
                      borderRadius: 7,
                    }}
                  >
                    <Button
                      title="Edit"
                      color="blue"
                      onPress={() => {
                        navigation.navigate("EditBookings", { id: item.id });
                      }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      marginLeft: 5,
                      backgroundColor: "white",
                      borderRadius: 7,
                    }}
                  >
                    <Button
                      title="Delete"
                      color="red"
                      onPress={() => {
                        deleteBooking(item.date);
                      }}
                    />
                  </TouchableOpacity>
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
});

export default Bookings;
