import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function Projeto({ nome, preco }) {
  const goToProjeto = () => {
    navigation.navigate('Projeto');
  };
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={goToProjeto}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.preco}>R$ {preco.toFixed(2)}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 16,
    marginVertical: 6,
  },
  nome: {
    fontSize: 18,
    fontWeight: '600',
  },
  preco: {
    marginTop: 8,
    fontSize: 16,
    color: '#444',
  },
});