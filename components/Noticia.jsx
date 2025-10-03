export default function CardNoticia() {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: '...' }} style={styles.imagem} />
      <View style={styles.textoContainer}>
        <Text style={styles.titulo}>Título da Notícia</Text>
        <Text style={styles.subtitulo}>Um breve subtítulo sobre a notícia.</Text>
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  cardContainer: { flexDirection: 'row', padding: 10 },
  imagem: { width: 80, height: 80, marginRight: 10 },
  textoContainer: { flex: 1, justifyContent: 'center' },
  titulo: { fontWeight: 'bold' },
  subtitulo: { color: 'gray' },
});
