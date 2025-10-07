import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function BarraDePesquisa({ styleProp }) {
  const [termo, setTermo] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, styleProp]}
        placeholder="Pesquisar..."
        placeholderTextColor="#999"
        value={termo}
        onChangeText={setTermo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
    marginVertical: 12,
  },
  input: {
    backgroundColor: '#ddd',
    padding: 12,
    borderRadius: 8,
  },
});

