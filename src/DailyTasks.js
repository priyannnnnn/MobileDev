import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

function DailyTask({navigation}){
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://supri-1cabb-default-rtdb.asia-southeast1.firebasedatabase.app/data.json');
        const fetchedData = response.data ? Object.values(response.data) : [];
        setData(fetchedData);
        console.log("Fetch Data =", fetchedData)
      } catch (error) {
        console.error(error);
        Alert.alert('Error', 'Gagal mengambil data dari Firebase!');
      }
    };

    fetchData();
  }, []);
  return(
    <ScrollView style={styles.container}>
      {/* Profile Card */}
      <View style={styles.profileCard}>
        <Image
          source={require('./image/profile.png')} // Replace with the image URL
          style={styles.characterImage}
        />
        <View style={styles.profileDetails}>
          <Text style={styles.profileName}>Angel</Text>
          <Text style={styles.profileStats}>HEALTHY FOOD <Text style={styles.level}>LVL 1</Text></Text>
          <Text style={styles.profileStats}>MINDFULNESS <Text style={styles.level}>LVL 1</Text></Text>
          <Text style={styles.profileStats}>VITAMIN <Text style={styles.level}>LVL 1</Text></Text>
          <Text style={styles.coins}>💰 15 COINS</Text>
        </View>
        <TouchableOpacity style={styles.settingsButton}>
          <Text>⚙️</Text>
        </TouchableOpacity>
      </View>

      {/* Daily Tasks and Challenges Navigation */}
      <View style={styles.navRow}>
        <Text style={styles.activeTab}>DAILY TASKS</Text>
        <Text style={styles.inactiveTab}>CHALLENGES</Text>
      </View>

      {/* Progress Bar */}
      {/* <View style={styles.progressBar}>
        {[...Array(8)].map((_, index) => (
          <View key={index} style={styles.progressStep}></View>
        ))}
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View> */}
      <View style={styles.progressBar}>
        {Array.from({ length: 8 }).map((_, index) => (
          <View
            key={index}
            style={[
              styles.progressStep,
              index < data.length ? styles.activeStep : styles.inactiveStep,
            ]}
          />
        ))}
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('RecordIntake')}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Task List */}
      <View style={styles.task}>
        {/* <View style={styles.taskIcon} /> */}
        <Image source={require('./image/healthy-food.png')} style={styles.taskIcon}/>
        <View style={styles.taskDetails}>
          <Text style={styles.taskTitle}>EAT VEGETABLES</Text>
          <Text style={styles.taskSubtitle}>30 exp 5 coins</Text>
        </View>
        <TouchableOpacity style={styles.checkBox}></TouchableOpacity>
      </View>

      <View style={styles.task}>
        {/* <View style={styles.taskIcon} /> */}
        <Image source={require('./image/yoga.png')} style={styles.taskIcon}/>
        <View style={styles.taskDetails}>
          <Text style={styles.taskTitle}>PRENATAL EXERCISE</Text>
          <Text style={styles.taskSubtitle}>30 exp 6 coins</Text>
        </View>
        <TouchableOpacity style={styles.checkBox}></TouchableOpacity>
      </View>

      <View style={styles.task}>
        {/* <View style={styles.taskIcon} /> */}
        <Image source={require('./image/cream.png')} style={styles.taskIcon}/>
        <View style={styles.taskDetails}>
          <Text style={styles.taskTitle}>CONSUME VITAMIN</Text>
          <Text style={styles.taskSubtitle}>30 exp 5 coins</Text>
        </View>
        <TouchableOpacity style={styles.checkBox}></TouchableOpacity>
      </View>
    </ScrollView>
  )
}
export default DailyTask;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8d8eb",
    padding: 16,
  },
  profileCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 30,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  characterImage: {
    width: 80,
    height: 100,
    borderRadius: 30,
  },
  profileDetails: {
    marginLeft: 16,
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profileStats: {
    fontSize: 14,
    color: "#555",
  },
  level: {
    fontWeight: "bold",
  },
  coins: {
    fontSize: 14,
    marginTop: 8,
  },
  settingsButton: {
    padding: 8,
  },
  navRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  activeTab: {
    fontSize: 16,
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: "#000",
  },
  inactiveTab: {
    fontSize: 16,
    color: "#888",
  },
  progressBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
    backgroundColor: "#e0e0e0",
    borderRadius: 16,
    padding: 8,
  },
  progressStep: {
    width: 24,
    height: 24,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginHorizontal: 4,
  },
  addButton: {
    backgroundColor: "#000",
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  task: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  taskIcon: {
    width: 40,
    height: 40,
    backgroundColor: "#ddd",
    borderRadius: 20,
    marginRight: 16,
  },
  taskDetails: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  taskSubtitle: {
    fontSize: 14,
    color: "#888",
  },
  checkBox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#888",
    borderRadius: 4,
  },
  progressStep: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginHorizontal: 4,
  },
  activeStep: {
    backgroundColor: "#4caf50", // Active step color (e.g., green)
  },
  inactiveStep: {
    backgroundColor: "#ddd", // Inactive step color (e.g., light gray)
  },
});