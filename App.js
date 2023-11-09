import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";
import FormScreen from "./src/screens/FormScreen";
import DetailScreen from "./src/screens/DetailScreen";
import LoginScreen from "./src/screens/LoginScreen";
import MoviesScreen from "./src/screens/MoviesScreen";
import MovieDetailScreen from "./src/screens/MovieDetailScreen";
import UsersListScreen from "./src/screens/UsersListScreen";

import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./FirebaseConfig";
import { useState, useEffect } from "react";

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="Home" component={HomeScreen} />
      <InsideStack.Screen name="List" component={ListScreen} />
      <InsideStack.Screen name="Form" component={FormScreen} />
      <InsideStack.Screen name="Detail" component={DetailScreen} />
      <InsideStack.Screen name="Movies" component={MoviesScreen} />
      <InsideStack.Screen name="MovieDetail" component={MovieDetailScreen} />
      <InsideStack.Screen name="Users" component={UsersListScreen} />
    </InsideStack.Navigator>
  );
}
export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {user ? (
          <Stack.Screen name="Inside" component={InsideLayout} options={{ headerShown: false }}/>
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
