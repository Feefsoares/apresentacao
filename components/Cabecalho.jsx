export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.logo}>Meu App</Text>
      <Image source={{ uri: '...' }} style={styles.avatar} />
    </View>
  );
}
 
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f0f0f0',
  },
  logo: { fontSize: 20, fontWeight: 'bold' },
  avatar: { width: 40, height: 40, borderRadius: 20 },
});
