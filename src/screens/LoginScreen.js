import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { FIREBASE_AUTH, FIREBASE_APP } from "../../FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  getAuth, 
  signInWithCredential,
} from "firebase/auth";
import { ActivityIndicator } from "react-native";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = FIREBASE_AUTH;

  GoogleSignin.configure({
    webClientId:
      "93265877309-7l4ncb4acfmdp0qcf73vsv18uqp8te5s.apps.googleusercontent.com",
  });

  // const signUp = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await createUserWithEmailAndPassword(auth, email, password);
  //     console.log(response);
  //     alert('Check your email!')
  //   } catch (error) {
  //     console.log(error);
  //     alert("SignUp failed" + error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
      alert("SignIn failed" + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    // const { idToken } = await GoogleSignin.signIn();
    // const googleCredential = GoogleAuthProvider.credential(idToken);
    // console.log(googleCredential); // undefined
    // const user_sign_in = auth().signInWithCredential(googleCredential);
    // user_sign_in
    //   .then((user) => {
    //     console.log(user.familyName);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
  
      const { idToken, accessToken } = userInfo;
  
      const auth = getAuth(FIREBASE_APP); // Observe a mudança aqui
      const googleCredential = GoogleAuthProvider.credential(idToken, accessToken);
  
      await signInWithCredential(auth, googleCredential);
  
      console.log('Usuário autenticado com sucesso:', auth.currentUser.displayName);
    } catch (error) {
      console.error('Erro ao fazer login com o Google:', error);
    }
  };

  return (
    <View>
      <Text style={styles.text}>Login View</Text>
      <KeyboardAvoidingView behavior="padding">
        <Text style={styles.label}>Email:</Text>
        <TextInput
          value={email}
          style={styles.input}
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={styles.label}>Senha:</Text>
        <TextInput
          value={password}
          style={styles.input}
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View>
            <Button onPress={signIn} title="Login" />
            {/* <Button onPress={signUp} title="Register" /> */}
            <GoogleSigninButton
              title="Google Sign-In"
              onPress={handleGoogleSignIn}
            />
          </View>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

LoginScreen.defaultProps = {
  initialValues: {
    email: "",
    password: "",
  },
};

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    marginVertical: 20,
    marginHorizontal: 100,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default LoginScreen;
