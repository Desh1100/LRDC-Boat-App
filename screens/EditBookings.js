import React, { useState, useEffect } from "react";
import { View, TextInput, Button, Alert, StyleSheet } from "react-native";
import { fdb } from "../firebaseconfig";
import { getDoc, doc, updateDoc } from "firebase/firestore";

const EditBookings = ({ navigation, route }) => {
  const { id } = route.params; // Document ID
  const [data, setData] = useState({
    adults: "",
    children: "",
    date: "",
    name: "",
    nic: "",
    telNum: "",
    time: "",
  });

  // Fetch data from Firestore based on document ID
  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(fdb, "Dates", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
      }
    };

    fetchData();
  }, [id]);

  // Update data in Firestore
  const handleUpdate = async () => {
    try {
      const docRef = doc(fdb, "Dates", id);
      await updateDoc(docRef, data);
      Alert.alert("Success", "Document updated successfully!");
      navigation.goBack(); // Navigate back after update
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Date"
        value={data.date}
        onChangeText={(text) => setData({ ...data, date: text })}
      />
      {/* Other input fields for children, date, name, NIC, telNum, and time */}

      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default EditBookings;
