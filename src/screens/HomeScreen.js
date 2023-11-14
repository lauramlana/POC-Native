import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const HomeScreen = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const authUser = FIREBASE_AUTH.currentUser;
    if (authUser) {
      setUser(authUser);
    }
  }, []);

  const handleLogout = async () => {
    try {
      await FIREBASE_AUTH.signOut();
      await GoogleSignin.revokeAccess();
    } catch (error) {
      console.log("Erro durante o logout:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Home View</Text>
      {user ? (
        <>
          <Text style={styles.userInfo}>Usuário logado: {user.displayName}</Text>
          <Image
            source={{ uri: user.photoURL }}
            style={styles.userImage}
          />
        </>
      ) : null}
      <Button
        onPress={() => props.navigation.navigate("Form")}
        title="Go to Form View"
      />
      <TouchableOpacity onPress={() => props.navigation.navigate("Movies")}>
        <Text style={styles.buttonText}>GO TO MOVIE VIEW</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("List")}>
        <Text style={styles.buttonText}>GO TO LIST VIEW</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Users")}>
        <Text style={styles.buttonText}>GO TO USERS LIST VIEW</Text>
      </TouchableOpacity>
      <Button
        onPress={() => props.navigation.navigate("Teste")}
        title="TESTE"
      />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 25,
    marginBottom: 20,
  },
  userInfo: {
    fontSize: 18,
    marginBottom: 10,
  },
  userImage: {
    height: 200,
    width: 200,
    borderRadius: 150,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 15,
    marginVertical: 10,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "gray",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default HomeScreen;
