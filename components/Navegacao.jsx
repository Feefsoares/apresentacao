import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Navegacao() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/25/25694.png' }}
        style={styles.icon}
      />
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/60/60992.png' }}
        style={styles.icon}
      />
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5987/5987462.png' }}
        style={styles.icon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 40,
  },
  icon: {
    width: 50,
    height: 50,
  },
});
