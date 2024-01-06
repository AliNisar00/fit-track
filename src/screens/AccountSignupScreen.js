import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Title, TextInput, Subheading, ActivityIndicator } from "react-native-paper";
import { FIREBASE_AUTH, FIREBASE_DB } from "../../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Toast from 'react-native-toast-message';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AccountSignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signUp = async () => {
    setLoading(true);
    try {
      // Create user with email and password
      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      // Save user's name to AsyncStorage with the Firebase user ID
      await AsyncStorage.setItem(`user_${user.uid}`, name);

      // Add user details to Firestore
      const userDocRef = await addDoc(collection(FIREBASE_DB, "users"), {
        uid: user.uid,
        name,
        email,
        createdAt: serverTimestamp(),
      });

      // Show a toast notification after successful account creation
      Toast.show({
        type: 'success',
        text1: 'Account Created',
      });

      // Navigate to the AccountLoginScreen upon successful account creation
      navigation.navigate('AccountLogin');
    } catch (error) {
      console.log(error);
      alert("Sign up failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Title style={styles.title}>Create Account</Title>
        <Subheading style={styles.subtitle}>
          Enter your details to create an account.
        </Subheading>

        {/* Name Input */}
        <TextInput
          label="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          mode="outlined"
          style={styles.input}
          theme={{ colors: { primary: 'white'} }}
        />

        {/* Email Input */}
        <TextInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          mode="outlined"
          style={styles.input}
          theme={{ colors: { primary: 'white'} }}
        />

        {/* Password Input */}
        <TextInput
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          mode="outlined"
          style={styles.input}
          theme={{ colors: { primary: 'white' } }}
        />
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#5D3FD3" />
      ) : (
        <>
          <View style={styles.buttonContainer}>
            <Button mode="contained" onPress={signUp} style={styles.button}>
              Create Account
            </Button>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    padding: 16,
  },
  contentContainer: {
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "white",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 16,
    color: "white",
  },
  input: {
    marginBottom: 16,
  },
  buttonContainer: {
    width: "100%",
  },
  button: {
    marginVertical: 18,
  },
});

export default AccountSignupScreen;
