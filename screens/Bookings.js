import * as React from "react";
import { Image, Alert } from "react-native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";
import { fdb } from "../firebaseconfig";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
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

  const handleItemPress = (item) => {
    // Display popup message with edit and delete buttons
    Alert.alert(
      "Booking Options",
      "What would you like to do with this booking?",
      [
        {
          text: "Edit",
          onPress: () => {
            navigation.navigate("EditBookings", { id: item.id });
          },
        },
        {
          text: "Delete",
          onPress: () => {
            deleteBooking(item.id);
          },
          style: "destructive",
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.background}>
      <View style={styles.headerA}>
        <Image
          style={styles.lrdcLogo3}
          source={require("../assets/lrdc-logo-2.png")}
        />
        <View style={{ left: "25%", top: -28 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            LRDC BOAT APP
          </Text>
          <Text>Bookings</Text>
        </View>
      </View>

      <FlatList
        style={{
          flex: 1,
        }}
        data={bookings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleItemPress(item)}>
            <View
              style={{
                margin: 10,
                padding: 20,
                backgroundColor: Color.colorPalegoldenrod1,
                borderRadius: 10,
                flexDirection: "row",
              }}
            >
              <View style={{ paddingRight: 50 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  Date: {item.date} - {item.time}
                </Text>
                <View style={{ flexDirection: "row", paddingBottom: 5 }}>
                  <Text>{item.package}</Text>
                  <Text> , </Text>
                  <Text>{item.ride}</Text>
                </View>
                <Text>Name : {item.name} </Text>
                <Text>Phone Number: {item.telNum}</Text>
                <Text>
                  Adults : {item.adults} / Children: {item.children}
                </Text>
                <Text>Note : {item.note}</Text>
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
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Bookings;
