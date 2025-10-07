import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function BotaoDePerfil() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://i.pinimg.com/736x/ce/40/50/ce4050f967af48a2f0700e1304d2d513.jpg',
        }}
        style={styles.foto}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    paddingHorizontal: 16,
  },
  foto: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});
