//universal imports; use these in every screen...
import { View, Text, StyleSheet, Alert, Image, ImageBackground, TextInput, ScrollView } from "react-native";
import * as Colors from '../Components/Colors'
import { useState, useEffect } from "react";
import { Button } from "../Components/Button";

export default function Landing({navigation, route}) {
  return(
    <View style={styles.container}>
      <ImageBackground source={require('../assets/Background-min.png')} style={{width: '100%', height: '100%', alignItems: 'center'}}>
        <View style={styles.darkOverlay} />
        <Text style={styles.title}>Haven</Text>
        <Text style={styles.subtitle}>A home for all.</Text>
        <Button title="Login" width="70%" height={50} marginTop="70%" onPress={() => navigation.push("Login")} backgroundColor={'rgba(255,255,255,.5)'} color={"#fff"}></Button>
        <Button title="Sign Up" width="70%" height={50} marginTop="10%" onPress={() => navigation.push("SignUp")} backgroundColor={'rgba(255,255,255,.5)'} color={"#fff"}></Button>

      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    //bold text
    fontWeight: 'bold',
    color: '#fff',
    marginTop: '60%',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 600,
    color: '#fff',
    marginTop: 10,
  },
  darkOverlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.5)', // Adjust black opacity to darken more or less
    // add blur
  },
})
