import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Text style={styles.text}>Hello, world</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',   // căn giữa theo chiều dọc
    alignItems: 'center',       // căn giữa theo chiều ngang
    backgroundColor: '#fff',
  },
  square: {
    width: 150,
    height: 150,
    backgroundColor: '#4CAF50', // màu nền hình vuông
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});