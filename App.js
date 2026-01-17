import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView
} from 'react-native';

const DATA = [
  {
    id: '1',
    type: 'task',
    title: 'Bước 1 Xác định nhu cầu khách hàng',
    content: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00',
    time: '20/08/2020, 06:00',
  },
  {
    id: '2',
    type: 'customer',
    title: 'Bạn có khách hàng mới!',
    content: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.',
    time: '20/08/2020, 06:00',
  },
  {
    id: '3',
    type: 'customer',
    title: 'Khách hàng được chia sẻ bị trùng',
    content: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống.',
    time: '20/08/2020, 06:00',
  },
  {
    id: '4',
    type: 'customer',
    title: 'Khách hàng được thêm bị trùng',
    content: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống.',
    time: '20/08/2020, 06:00',
  },
  {
    id: '5',
    type: 'task',
    title: 'Công việc sắp đến hạn trong hôm nay',
    content: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.',
    time: '20/08/2020, 06:00',
  },
  {
    id: '6',
    type: 'task',
    title: 'Công việc đã quá hạn',
    content: 'Bạn có 17 công việc đã quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành.',
    time: '20/08/2020, 06:00',
  },
];

const Item = ({ item }) => (
  <View style={styles.item}>
    <View
      style={[
        styles.icon,
        item.type === 'task' ? styles.taskIcon : styles.customerIcon,
      ]}
    >
      <Text style={styles.iconText}>
        {item.type === 'task' ? '✓' : '👥'}
      </Text>
    </View>

    <View style={styles.textBox}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.content}>{item.content}</Text>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  </View>
);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Thông báo</Text>

      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f5f9',
    marginTop:20,
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    padding: 14,
    backgroundColor: '#fff',
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#eaf2ff',
    marginHorizontal: 10,
    marginTop: 10,
    padding: 12,
    borderRadius: 8,
  },
  icon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  taskIcon: {
    backgroundColor: '#2f54eb',
  },
  customerIcon: {
    backgroundColor: '#5c7cfa',
  },
  iconText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  textBox: {
    flex: 1,
  },
  title: {
    fontWeight: '600',
    fontSize: 14,
  },
  content: {
    fontSize: 13,
    marginTop: 4,
    color: '#333',
  },
  time: {
    fontSize: 11,
    marginTop: 6,
    color: '#888',
  },
});