import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProjetosSugeridos({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projetos Sugeridos</Text>
      <View style={styles.list}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'indigo',
    marginBottom: 12,
  },
  list: {
    // pode adicionar estilos como flexWrap, etc.
  },
});