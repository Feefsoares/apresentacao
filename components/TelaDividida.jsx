export default function TelaDividida() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, backgroundColor: 'skyblue' }}>
        <Text>Mapa aqui</Text>
      </View>
      <View style={{ flex: 1, backgroundColor: 'steelblue' }}>
        <Text>Lista de locais aqui</Text>
      </View>
    </View>
  );
}
