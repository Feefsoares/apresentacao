import React, { useState } from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import BarraDePesquisa from '../../components/BarraDePesquisa';
import BotaoDePerfil from '../../components/BotaoDePerfil';
import Navegacao from '../../components/Navegacao';
import Projeto from '../../components/Projeto';
import ProjetosNovos from '../../components/ProjetosNovos';
import ProjetosSugeridos from '../../components/ProjetosSugeridos';

export default function App() {
  const [noturno, setNoturno] = useState(false);

  const backgroundColor = noturno ? '#121212' : '#fff';
  const textoBotaoModo = noturno ? 'Modo Claro' : 'Modo Escuro';

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor }]}>
      <ScrollView contentContainerStyle={styles.container}>
        <Button
          title={textoBotaoModo}
          onPress={() => setNoturno((prev) => !prev)}
        />

        <BarraDePesquisa
          styleProp={{ backgroundColor: noturno ? '#333' : '#ddd', color: noturno ? '#eee' : '#333' }}
        />

        <BotaoDePerfil />

        <ProjetosSugeridos>
          <Projeto nome="Sugerido 1" preco={12.99} />
          <Projeto nome="Sugerido 2" preco={20.0} />
          <Projeto nome="Sugerido 3" preco={69.99} />
        </ProjetosSugeridos>

        <ProjetosNovos>
          <Projeto nome="Projeto novo 1" preco={50.0} />
          <Projeto nome="Projeto novo 2" preco={15.99} />
          <Projeto nome="Projeto novo 3" preco={10.50} />
        </ProjetosNovos>

        <Navegacao />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    padding: 16,
    paddingBottom: 40,
  },
});