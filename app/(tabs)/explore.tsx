import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Explore({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');  
  
  const handleLogin = () => {
    navigation.navigate('Home');
    alert(`Nome: ${nome}\nEmail: ${email}\nSenha: ${senha}`);
  };
  const goToLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/indieGo-icon-branco.png')}
      style = {{ width: 150, height: 116, alignSelf: 'center' }}/>
      <Login campo="Nome" tipo="default" setter={setNome}/>
      <Login campo="Email" tipo="email-address" setter={setEmail}/>
      <Login campo="Senha" tipo="password" setter={setSenha}/>

      <TouchableOpacity style={styles.botao} onPress={handleLogin}>
        <Text style={styles.textoBotao}>Criar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToLogin}>
        <Text>Já possui uma conta? Clique para entrar!</Text>
      </TouchableOpacity>
    </View>
  );
}

function Login({ campo, tipo, setter }) {

  return (
    <View style={styles.campoContainer}>
    


      <Text style={styles.label}>{campo}</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={tipo === 'password'}
        keyboardType={tipo === 'email-address' ? 'email-address' : 'default'}
        onChangeText={setter}
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
    color: 'white'
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