import { TouchableOpacity, Text, StyleSheet } from 'react-native';
 
export default function BotaoPrincipal({ titulo, onApertar }) {
  return (
    <TouchableOpacity style={styles.botao} onPress={onApertar}>
      <Text style={styles.textoBotao}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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