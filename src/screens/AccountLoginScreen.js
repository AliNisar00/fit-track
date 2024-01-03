import { async } from "@firebase/util";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Title, TextInput, Subheading, ActivityIndicator } from "react-native-paper";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const AccountLoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log(response);
    } catch (error) {
        console.log(error);
        alert("Sign in failed: " + error.message);
    } finally {
        setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Title style={styles.title}>Account Login</Title>
        <Subheading style={styles.subtitle}>
          Enter your email and password to log in.
        </Subheading>

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

      { loading ? <ActivityIndicator size = "large" color = "#5D3FD3" />
      : <>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={signIn}
          style={styles.button}
        >
          Login
        </Button>
      </View>
      </> }

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black", // Set background color to black
    padding: 16,
  },
  contentContainer: {
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "white", // Set text color to white
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 16
  },
  input: {
    marginBottom: 16,
  },
  buttonContainer: {
    width: "50%"
  },
  button: {
    marginVertical: 18,
  },
});

export default AccountLoginScreen;
