import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TextInput, KeyboardAvoidingView } from "react-native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { ActivityIndicator } from "react-native";

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

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
        <Button
        onPress={signIn}
          title="Login"
        />
        {/* <Button onPress={signUp} title="Register" /> */}
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
