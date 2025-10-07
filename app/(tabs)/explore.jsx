import { useState } from "react";
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Explore({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async () => {
    if (!nome || !email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:3000/usuarios', { // Troque pelo seu IP local
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usuario: {
            nome,
            email,
            senha
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao criar o usuário');
      }

      const novoUsuario = await response.json();
      console.log('Novo usuário criado:', novoUsuario);
      Alert.alert("Sucesso", "Usuário criado com sucesso!");

      // Resetando o formulário
      setNome('');
      setEmail('');
      setSenha('');

      // Opcional: redireciona para outra tela
      navigation.navigate('Home');

    } catch (error) {
      console.error('Erro ao enviar os dados:', error);
      Alert.alert("Erro", "Não foi possível criar o usuário.");
    }
  };

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/indieGo-icon-branco.png')}
        style={{ width: 150, height: 116, alignSelf: 'center' }}
      />
      
      <CampoInput campo="Nome" tipo="default" setter={setNome} valor={nome} />
      <CampoInput campo="Email" tipo="email-address" setter={setEmail} valor={email} />
      <CampoInput campo="Senha" tipo="password" setter={setSenha} valor={senha} />

      <TouchableOpacity style={styles.botao} onPress={handleSubmit}>
        <Text style={styles.textoBotao}>Criar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={goToLogin}>
        <Text style={{ color: '#fff', marginTop: 10 }}>Já possui uma conta? Clique para entrar!</Text>
      </TouchableOpacity>
    </View>
  );
}

// Componente de input reutilizável
function CampoInput({ campo, tipo, setter, valor }) {
  return (
    <View style={styles.campoContainer}>
      <Text style={styles.label}>{campo}</Text>
      <TextInput
        style={styles.input}
        placeholder={campo}
        placeholderTextColor="#ccc"
        secureTextEntry={tipo === 'password'}
        keyboardType={tipo === 'email-address' ? 'email-address' : 'default'}
        onChangeText={setter}
        value={valor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2d2d',
    justifyContent: 'center',
    padding: 20,
  },
  campoContainer: {
    marginBottom: 15,
  },
  label: {
    color: '#fff',
    fontFamily: 'Rubik',
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'indigo',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    color: 'white',
  },
  botao: {
    backgroundColor: 'indigo',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  textoBotao: {
    color: '#87f1ff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});