import { Image, StyleSheet, Text, View } from 'react-native';

  export default function CartaoPerfil({nome, profissao, urlFoto}){
      return(
        <View style={styles.cartao}>
          <Image style={styles.imagem}
            source={{uri: urlFoto}}/>
          <Text style={styles.nome}>Nome: {nome}</Text>
          <Text style={styles.profissao}>Profisão: {profissao}</Text>
        </View>
      );
  }

const styles = StyleSheet.create({
  cartao: {
    alignItems: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profissao: {
    fontSize: 16,
    color: 'gray',
  }
});
