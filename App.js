import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import FormScreen from './src/screens/FormScreen';
import DetailScreen from './src/screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='List' component={ListScreen}/>
        <Stack.Screen name='Form' component={FormScreen}/>
        <Stack.Screen name='Detail' component={DetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

