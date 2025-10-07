// app/(tabs)/Projeto.jsx
// app/(tabs)/Projeto.jsx
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import TelaDeProduto from '../../components/TelaDeProduto';

export default function Produto({ navigation }) {
  const voltar = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <TelaDeProduto
          image="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSIO0x0FjlhSZXfkXXevg_s7KknCi0Lc6-Mxx7nCId5igxnHt3gWV92azkZwWxapsg1YnvKapEtfmp9bgL5x7TQiRSu-11Dg5baGasyazBHtw"
          name="Silksong"
          price={70.0}
          seller="Team Cherry"
        />
      </ScrollView>

      {/* Botão de Voltar estilizado */}
      <TouchableOpacity style={styles.botaoVoltar} onPress={voltar}>
        <Text style={styles.textoBotao}>Voltar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 16,
  },
  botaoVoltar: {
    backgroundColor: '#007AFF', // azul estilo iOS
    margin: 20,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 3, // sombra no Android
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
