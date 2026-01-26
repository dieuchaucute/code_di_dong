import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, Alert } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [phone, setPhone] = useState('');

  const handleContinue = () => {
    if (phone.trim() === '') {
      Alert.alert('Lỗi', 'Vui lòng nhập số điện thoại');
      return;
    }

    // Bắt đầu bằng 0 và đủ 10 số
    const phoneRegex = /^0[0-9]{9}$/;
    if (!phoneRegex.test(phone)) {
      Alert.alert(
        'Lỗi',
        'Số điện thoại không hợp lệ (phải bắt đầu bằng 0 và đủ 10 số)'
      );
      return;
    }

    // Hợp lệ
    Alert.alert('hello');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>

      <Text style={styles.label}>Nhập số điện thoại</Text>

      <Text style={styles.desc}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
        maxLength={10}
      />

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 60,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
  },

  label: {
    fontSize: 16,
    fontWeight: '400',
    paddingBottom: 30,
  },

  desc: {
    fontSize: 13,
    paddingBottom: 10,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
    marginBottom: 200,
  },

  button: {
    backgroundColor: '#ddd',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 50,
  },

  buttonText: {
    fontSize: 16,
    color: '#555',
  },
});
