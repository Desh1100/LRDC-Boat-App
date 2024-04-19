import React, { useState } from "react";
import { StyleSheet, View, Text, Button, Modal, FlatList } from "react-native";
import { Calendar } from "react-native-calendars";

const CalendarScreen = () => {
  // State for managing modal visibility and selected date
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [todoList, setTodoList] = useState([]);

  // Dummy data for to-do list
  const initialTodoList = {
    "2024-04-20": ["Buy groceries", "Call mom"],
    "2024-04-22": ["Doctor's appointment", "Meeting with team"],
    "2024-04-23": ["Gym session", "Finish project"],
  };

  // Define marked dates with different styles
  const markedDates = {
    "2024-04-20": { selected: true, marked: true, selectedColor: "blue" },
    "2024-04-22": { selected: true, marked: true, selectedColor: "blue" },
    "2024-04-23": { marked: true, dotColor: "green" },
  };

  // Handle day press event
  const handleDayPress = (day) => {
    console.log("Selected day:", day);
    setSelectedDate(day.dateString);
    // Set to-do list for the selected date
    setTodoList(initialTodoList[day.dateString] || []);
    // Show modal
    setModalVisible(true);
  };

  // Close modal
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
        maxDate="2024-04-30"
      />

      {/* Modal to display to-do list */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>To-Do List for {selectedDate}</Text>
            {/* Display to-do list using FlatList */}
            <FlatList
              data={todoList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Text style={styles.todoItem}>{item}</Text>
              )}
            />
            {/* Close modal button */}
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
    textDayFontFamily: "monospace",
    textMonthFontFamily: "monospace",
    textDayHeaderFontFamily: "monospace",
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
