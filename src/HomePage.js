import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Svg, Circle } from 'react-native-svg';
function HomePage({navigation, route}){
  // const { score } = route.params;
  const score = route.params?.score ?? 0;
  return(
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('./image/Icon.png')} // Replace with your image URL
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.name}>Angel</Text>
          <Text style={styles.age}>28 Tahun</Text>
        </View>
        <TouchableOpacity style={styles.logIntakeButton} onPress={()=> navigation.navigate('RecordIntake')}>
          <Text style={styles.logIntakeText}>+ Catat Asupan</Text>
        </TouchableOpacity>
      </View>

      {/* Nutrition Section */}
      <View style={styles.nutritionSection}>
        <Text style={styles.sectionTitle}>You</Text>
        <View style={styles.nutritionRow}>
        <View style={styles.nutritionItem}>
          <Svg height="60" width="60">
            <Circle
              cx="30"
              cy="30"
              r="28"
              stroke="#ccc"
              strokeWidth="4"
              fill="none"
            />
            <Circle
              cx="30"
              cy="30"
              r="28"
              stroke="#d60000"
              strokeWidth="4"
              strokeDasharray={`${score * 10},100`}
              fill="none"
              rotation="270"
              origin="30,30"
            />
          </Svg>
          <Text style={styles.nutritionValue}>{score}/10</Text>
          <Text style={styles.nutritionLabel}>Protein</Text>
        </View>

        <View style={styles.nutritionItem}>
          <Svg height="60" width="60">
            <Circle
              cx="30"
              cy="30"
              r="28"
              stroke="#ccc"
              strokeWidth="4"
              fill="none"
            />
            <Circle
              cx="30"
              cy="30"
              r="28"
              stroke="#d60000"
              strokeWidth="4"
              strokeDasharray={`${score * 10},100`}
              fill="none"
              rotation="270"
              origin="30,30"
            />
          </Svg>
          <Text style={styles.nutritionValue}>{score}/10</Text>
          <Text style={styles.nutritionLabel}>Karbohidrat</Text>
        </View>

        <View style={styles.nutritionItem}>
          <Svg height="60" width="60">
            <Circle
              cx="30"
              cy="30"
              r="28"
              stroke="#ccc"
              strokeWidth="4"
              fill="none"
            />
            <Circle
              cx="30"
              cy="30"
              r="28"
              stroke="#d60000"
              strokeWidth="4"
              strokeDasharray={`${score * 10},100`}
              fill="none"
              rotation="270"
              origin="30,30"
            />
          </Svg>
          <Text style={styles.nutritionValue}>{score}/10</Text>
          <Text style={styles.nutritionLabel}>Kalori</Text>
        </View>
      </View>
      </View>

      {/* Menu */}
      <View style={styles.menu}>
        <Text style={styles.sectionTitle}>Menu</Text>
        {/* <View style={styles.menuRow}>
          {['Imunisasi', 'Vaksin', 'Kontrol', 'Tumbuh'].map((item, index) => (
            <View key={index} style={styles.menuItem}>
              <View style={styles.menuIcon} />
              <Text style={styles.menuText}>{item}</Text>
            </View>
          ))}
        </View> */}
        <View style={styles.menuRow}>
          <View style={styles.menuItem}>
            {/* <View style={styles.menuIcon} /> */}
            <Image source={require('./image/imunisasion.png')} style={styles.menuIcon}/>
            <Text style={styles.menuText}>Imunisasi</Text>
          </View>
          <View style={styles.menuItem}>
            {/* <View style={styles.menuIcon} /> */}
            <Image source={require('./image/vaksin.png')} style={styles.menuIcon}/>
            <Text style={styles.menuText}>Vaksin</Text>
          </View>
          <View style={styles.menuItem}>
            {/* <View style={styles.menuIcon} /> */}
            <Image source={require('./image/kontrol.png')} style={styles.menuIcon}/>
            <Text style={styles.menuText}>Kontrol</Text>
          </View>
          <View style={styles.menuItem}>
            {/* <View style={styles.menuIcon} /> */}
            <Image source={require('./image/tumbuh.png')} style={styles.menuIcon}/>
            <Text style={styles.menuText}>Tumbuh</Text>
          </View>
        </View>
      </View>

      {/* Health Services */}
      <View style={styles.healthServices}>
        <Text style={styles.healthText}>
          Anda belum terdaftar di layanan manapun.
        </Text>
        <TouchableOpacity style={styles.joinButton}>
          <Text style={styles.joinButtonText}>Gabung</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default HomePage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8d8eb',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
    padding:30,
    borderRadius:20,
    backgroundColor:'white'
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  age: {
    fontSize: 14,
    color: '#777',
  },
  logIntakeButton: {
    backgroundColor: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    borderColor: '#d60000',
    borderWidth: 1,
  },
  logIntakeText: {
    color: '#d60000',
    fontWeight: 'bold',
  },
  nutritionSection: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  nutritionRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  nutritionItem: {
    alignItems: 'center',
  },
  nutritionValue: {
    position: 'absolute',
    top: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  nutritionLabel: {
    marginTop: 8,
    fontSize: 14,
  },
  menu: {
    marginBottom: 16,
  },
  menuRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  menuItem: {
    alignItems: 'center',
  },
  menuIcon: {
    width: 40,
    height: 40,
    backgroundColor: '#F8FAFC',
    borderRadius: 8,
    marginBottom: 4,
  },
  menuText: {
    fontSize: 14,
  },
  healthServices: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
  },
  healthText: {
    fontSize: 14,
    marginBottom: 8,
  },
  joinButton: {
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  joinButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});