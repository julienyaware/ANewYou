import React, { useState } from 'react';
import { Alert, Image, Pressable, SafeAreaView, Text, TextInput, View, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

const logo = require("../assets/logo.jpg");
const facebook = require("../assets/favicon.png");
const backgroundImage = require('../assets/backgroundImage.jpg');

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onHandleSignup = () => {
    if (email !== '' && password !== '') {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigation.navigate('Login')
          Alert.alert('Signup successful');
        })
        .catch(err => Alert.alert('Sign up Error please try again'));
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Image source={logo} style={styles.image} resizeMode='contain' />
        <Text style={styles.title}>Sign Up</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder='EMAIL'
            value={email}
            onChangeText={email => setEmail(email)}
            autoCorrect={false}
            autoCapitalize='none'
          />
          <TextInput
            style={styles.input}
            placeholder='PASSWORD'
            secureTextEntry
            value={password}
            onChangeText={password => setPassword(password)}
            autoCorrect={false}
            autoCapitalize='none'
          />
        </View>
        <View style={styles.rememberView}>
          <View>
          </View>
        </View>

        <View style={styles.buttonView}>
          <Pressable style={styles.button} onPress={onHandleSignup}>
            <Text style={styles.buttonText}>REGISTER</Text>
          </Pressable>
        </View>

        <Text style={styles.footerText}>Already have an account?
          <Text style={styles.signup} onPress={() => navigation.navigate('Login')}>
            Login
          </Text>
        </Text>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 70,
  },
  image: {
    marginTop: 20,
    height: 160,
    width: 170
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    paddingVertical: 40,
    color: "#6c4130"
  },
  inputView: {
    gap: 15,
    width: "100%",
    paddingHorizontal: 40,
    marginBottom: 5
  },
  input: {
    height: 50,
    paddingHorizontal: 20,
    borderColor: "#6c4130",
    borderWidth: 1,
    borderRadius: 7,
    marginBottom: 5,
  },
  rememberView: {
    width: "100%",
    paddingHorizontal: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 8
  },
  button: {
    backgroundColor: "#6c4130",
    height: 45,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 18,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold"
  },
  buttonView: {
    width: "100%",
    paddingHorizontal: 50
  },
  footerText: {
    textAlign: "center",
    color: "gray",
  },
  signup: {
    color: "#6c4130",
    fontSize: 13
  }
});
