import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
// Importe suas telas aqui
import Explore from './explore';
import Index from './index';
import Login from './login';

const Stack = createNativeStackNavigator();
 
function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Index" component={Index} />
       </Stack.Navigator>
  );
}
 
export default App;

