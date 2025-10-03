import { StyleSheet, View } from 'react-native';
import FormularioInterativo from '../../components/FormularioInterativo';

export default function Login(){
    return(
        <View style={styles.container}>
            <FormularioInterativo estiloBotao={styles.botao} estiloTexto={styles.input}/>
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
    margin: 10,
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