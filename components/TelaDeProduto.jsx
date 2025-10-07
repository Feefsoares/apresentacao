import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function TelaDeProduto({ image, name, price, seller }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>R$ {price.toFixed(2)}</Text>
      <Text style={styles.seller}>Vendido por: {seller}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    color: '#007b00',
    marginBottom: 8,
  },
  seller: {
    fontSize: 16,
    color: '#555',
  },
});
