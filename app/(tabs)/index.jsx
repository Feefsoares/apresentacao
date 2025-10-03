import { StyleSheet, View } from 'react-native';
import BotaoCustomizado from '../../components/BotaoCustomizado';
import CartaoPerfil from '../../components/CartaoPerfil';
import FormularioInterativo from '../../components/FormularioInterativo';

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
export default function Index() {
  return (
    <View style={styles.container}>
{/* {      <CartaoPerfil 
        nome="Ana Maria"
        profissao="Engenheira de Software"
        urlFoto="https://static.wikia.nocookie.net/dublagempedia/images/0/0b/Superman-PNG-HD.png/revision/latest/scale-to-width-down/360?cb=20171210194608&path-prefix=pt-br"
      />
      <CartaoPerfil 
        nome="Carlos Souza"
        profissao="Designer de Produto"
        urlFoto="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
      />
      <BotaoCustomizado titulo='teste'/> */}
        <View>
            <FormularioInterativo/>
        </View>
      
    </View>
  );
}
