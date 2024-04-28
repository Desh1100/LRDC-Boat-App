import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, Modal, FlatList } from "react-native";
import { Calendar } from "react-native-calendars";
import { fdb } from "../firebaseconfig"; // Import your Firestore instance
import { doc, getDocs, collection, getDoc } from "firebase/firestore";

const CalendarScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [todoList, setTodoList] = useState([]);
  const [markedDates, setMarkedDates] = useState({});

  useEffect(() => {
    fetchMarkedDates();
  }, []);

  const fetchMarkedDates = async () => {
    try {
      const datesSnapshot = await getDocs(collection(fdb, "Dates"));
      const markedDates = {};
      datesSnapshot.forEach((doc) => {
        const date = doc.id.split(".").reverse().join("-");
        markedDates[date] = {
          selected: true,
          marked: true,
          selectedColor: "blue",
        };
      });
      setMarkedDates(markedDates);
    } catch (error) {
      console.error("Error fetching marked dates:", error);
    }
  };

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
    fetchTodoList(day.dateString);
    setModalVisible(true);
  };

  const fetchTodoList = async (dateString) => {
    const reversedDate = dateString.split("-").reverse().join(".");
    console.log(reversedDate);
    try {
      const docRef = doc(fdb, "Dates", reversedDate);
      const docSnap = await getDoc(docRef);
      console.log(docSnap);

      if (docSnap.exists()) {
        setTodoList(docSnap.data().dataa || []);
      } else {
        setTodoList([]);
      }
    } catch (error) {
      console.error("Error fetching todo list:", error);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={handleDayPress}
        current="2024-04-20"
        theme={styles.calendarTheme}
        markedDates={markedDates}
        minDate="2024-04-01"
        maxDate="2025-01-30"
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Bookings {selectedDate}</Text>
            <FlatList
              data={todoList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Text style={styles.todoItem}>{item}</Text>
              )}
            />
            <Button title="Close" onPress={closeModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  calendarTheme: {
    calendarBackground: "#f0f0f0",
    textSectionTitleColor: "#b6c1cd",
    selectedDayBackgroundColor: "#00adf5",
    selectedDayTextColor: "#ffffff",
    todayTextColor: "#00adf5",
    dayTextColor: "#2d4150",
    textDisabledColor: "#d9e1e8",
    dotColor: "#00adf5",
    selectedDotColor: "#ffffff",
    arrowColor: "orange",
    disabledArrowColor: "#d9e1e8",
    monthTextColor: "blue",
    indicatorColor: "blue",

    textDayFontWeight: "300",
    textMonthFontWeight: "bold",
    textDayHeaderFontWeight: "300",
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  todoItem: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default CalendarScreen;
