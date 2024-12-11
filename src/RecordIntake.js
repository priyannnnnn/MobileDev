import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';
import axios from 'axios';

const RecordIntake = ({navigation}) => {
  const [makanan, setMakanan] = useState('');
  const [sayuran, setSayuran] = useState('');
  const [buahBuahan, setBuahBuahan] = useState('');
  const [porsi, setPorsi] = useState('');
  const [score, setScore] = useState(0);

  const handleSubmit = async () => {
    let calculatedScore = 0;

    if (makanan && sayuran) {
      calculatedScore = buahBuahan ? 3 : 2;
    }

    if (!makanan || !sayuran || (!buahBuahan && calculatedScore !== 2) || !porsi) {
      Alert.alert('Error', 'Semua bidang harus diisi dengan benar!');
      return;
    }

    const data = {
      makanan,
      sayuran,
      buahBuahan: buahBuahan || 'Tidak diisi',
      porsi,
      score: calculatedScore,
    };

    try {
      await axios.post('https://supri-1cabb-default-rtdb.asia-southeast1.firebasedatabase.app/data.json', data);
      setScore(calculatedScore);
      navigation.navigate('Main', { score: calculatedScore });
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Terjadi kesalahan saat mengirim data!');
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Record Food</Text>
      <Text style={styles.label}>Food:</Text>
      <TextInput
        style={styles.input}
        placeholder="Add Food"
        value={makanan}
        onChangeText={setMakanan}
      />

      <Text style={styles.label}>Vegetables:</Text>
      <TextInput
        style={styles.input}
        placeholder="Add Vegetables"
        value={sayuran}
        onChangeText={setSayuran}
      />

      <Text style={styles.label}>Fruits:</Text>
      <TextInput
        style={styles.input}
        placeholder="add Fruits"
        value={buahBuahan}
        onChangeText={setBuahBuahan}
      />

      <Text style={styles.label}>Portion:</Text>
      <TextInput
        style={styles.input}
        placeholder="Insert number of servings"
        value={porsi}
        onChangeText={setPorsi}
        keyboardType="numeric"
      />

      <Button title="Kirim" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8d8eb',
  },
  label: {
    fontSize: 20,
    fontWeight:'500',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  Text:{
    fontWeight:'bold',
    fontSize:30,
    alignItems:'center',
    textAlign:'center'
  }
});

export default RecordIntake;
