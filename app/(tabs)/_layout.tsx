import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
// Importe suas telas aqui
import Explore from './explore';
import Index from './index';
import Login from './login';
import Projeto from './Projeto';

const Stack = createNativeStackNavigator();
 
function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Criar Conta" component={Explore} />
        <Stack.Screen name="Home" component={Index} />
        <Stack.Screen name="Projeto" component={Projeto} />
       </Stack.Navigator>
  );
}
 
export default App;

