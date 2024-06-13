import React, { useState } from 'react'
import { Alert, Button, Image, Pressable, SafeAreaView, Text, TextInput, View,StyleSheet } from 'react-native'
const logo = require("../assets/logo.jpg")
const facebook = require("../assets/favicon.png")
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase'

export default function RegisterScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onHandleSignup = () => {
    if (email !== '' && password !== '') {
  createUserWithEmailAndPassword(auth, email, password)
        .then(() => Alert.alert('Signup successful go to login screen'))
        .catch(err => Alert.alert('Sign up Error please try again'));
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      <Image source={logo} style={styles.image} resizeMode='contain' />
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.inputView}>
        <TextInput style={styles.input} placeholder='EMAIL' value={email} onChangeText={email => setEmail(email)} autoCorrect={false}
          autoCapitalize='none' />
        <TextInput style={styles.input} placeholder='PASSWORD' secureTextEntry value={password} onChangeText={password => setPassword(password)} autoCorrect={false}
          autoCapitalize='none' />
      </View>
      <View style={styles.rememberView}>
        <View>
          <Pressable onPress={() => Alert.alert("Forget Password!")}>
            <Text style={styles.forgetText}>Forgot Password?</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.buttonView}>
        <Pressable style={styles.button} onPress={onHandleSignup}>
          <Text style={styles.buttonText}>REGISTER</Text>
        </Pressable>
        <Text style={styles.optionsText}>OR REGISTER WITH</Text>
      </View>

      <View style={styles.mediaIcons}>
        <Image source={facebook} style={styles.icons} />
       
      </View>

      <Text style={styles.footerText}>Don't Have Account?<Text style={styles.signup}> Login</Text></Text>


    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 70,
  },
  image: {
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
    borderRadius: 7
  },
  rememberView: {
    width: "100%",
    paddingHorizontal: 50,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 8
  },
  switch: {
    flexDirection: "row",
    gap: 1,
    justifyContent: "center",
    alignItems: "center"

  },
  rememberText: {
    fontSize: 13
  },
  forgetText: {
    fontSize: 11,
    color: "#6c4130"
  },
  button: {
    backgroundColor: "#6c4130",
    height: 45,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
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
  optionsText: {
    textAlign: "center",
    paddingVertical: 10,
    color: "gray",
    fontSize: 13,
    marginBottom: 6
  },
  mediaIcons: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 23
  },
  icons: {
    width: 40,
    height: 40,
  },
  footerText: {
    textAlign: "center",
    color: "gray",
  },
  signup: {
    color: "#6c4130",
    fontSize: 13
  }
})