import { TextInput, View } from "react-native";
import { useState } from "react";
import BotaoPrincipal from "./BotaoReutilizavel";

export default function FormularioInterativo({estiloTexto, estiloBotao}) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    alert(`Nome: ${nome}\nEmail: ${email}\nSenha: ${senha}`);
  };

  return (
    <View>
      <TextInput
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
        style={estiloTexto}
      />
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu email"
        style={estiloTexto}
      />
      <TextInput
        value={senha}
        onChangeText={setSenha}
        placeholder="Digite sua senha"
        style={estiloTexto}
        secureTextEntry
      />
      <BotaoPrincipal titulo="Entrar" onApertar={handleLogin} style={estiloBotao}/>
    </View>
  );
}