//pets (int)
//children (int)
//bio

//universal imports; use these in every screen...
import { View, Text, StyleSheet, Alert, Image, ImageBackground, TextInput, ScrollView, TouchableOpacity, Switch } from "react-native";
import * as Colors from '../Components/Colors'
import { useState, useEffect } from "react";
import { Button } from "../Components/Button";

import * as ImagePicker from 'expo-image-picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import moment, { lang } from 'moment';
import { uploadImage } from "../Components/ImageCloudStorage";
import { createUser } from "../Components/FunctionCalls";


export default function MoreInfo({navigation, route}) {
  const { email, uid, name, dob, phone, nationality, isHost, pfp } = route.params

  const [languages, setLanguages] = useState([])
  const[children , setChildren] = useState(0)
  const [pets, setPets] = useState(0)
  const [bio, setBio] = useState('')


  async function proceed() {
    let user = {email: email, uid: uid, name: name, dob: dob, phone: phone, nationality: nationality, isHost: isHost, pfp: pfp, pets: pets, children: children, bio: bio, languages: languages,
      requests: []      
    }
    let res = null

    if(isHost){
      updatedUser = {
        ...user,
        stays: []
      }
      res = await createUser(updatedUser)
    } else {
      res = await createUser(user)
    }

    if(res.status == 200) {
      navigation.navigate("Home", {screen: "Home", params: {uid: res.uid}})
    } else {
      Alert.alert("Error", "Something went wrong. Please try again.")
    }
  }

  return(
    <View style={styles.container}>
        <Text style={styles.header}>Almost done...</Text>

        <View style={{width: '80%', marginLeft: '10%', marginTop: '10%'}}>
            <TextInput value={languages} onChangeText={text => setLanguages(text)} placeholder="Languages" placeholderTextColor={Colors.secondaryDark} style={{width: '100%', color: Colors.primaryDark, marginTop: '5%', fontSize: 14}}></TextInput>
            <View style={{width: '100%', backgroundColor: Colors.secondaryDark, height: 1, marginTop: 5}}></View>
        </View>

        {
          !isHost
          ?
          <View>
            <View style={{width: '80%', marginLeft: '10%', marginTop: '7%'}}>
                <TextInput value={children} onChangeText={text => setChildren(text)} placeholder="# of Children" placeholderTextColor={Colors.secondaryDark} style={{width: '100%', color: Colors.primaryDark, marginTop: '5%', fontSize: 14}}></TextInput>
                <View style={{width: '100%', backgroundColor: Colors.secondaryDark, height: 1, marginTop: 5}}></View>
            </View>

            <View style={{width: '80%', marginLeft: '10%', marginTop: '7%'}}>
                <TextInput value={pets} onChangeText={text => setPets(text)} placeholder="# of Pets" placeholderTextColor={Colors.secondaryDark} style={{width: '100%', color: Colors.primaryDark, marginTop: '5%', fontSize: 14}}></TextInput>
                <View style={{width: '100%', backgroundColor: Colors.secondaryDark, height: 1, marginTop: 5}}></View>
            </View>
          </View>
          :
          <View></View>
        }

        <View style={{width: '80%', marginLeft: '10%', marginTop: '7%', borderWidth: 1, borderColor: Colors.secondaryDark, padding: 15, height: 250, borderRadius: 10}}>
            <TextInput multiline value={bio} onChangeText={text => setBio(text)} placeholder="Tell us your story..." placeholderTextColor={Colors.secondaryDark} style={{width: '100%', color: Colors.primaryDark, fontSize: 14}}></TextInput>
        </View>

      <Button title="Complete" onPress={() => proceed()} backgroundColor={Colors.primary} width={"80%"} height={60} marginLeft={'10%'} color={"#fff"} marginTop={isHost ? "59%" : '25%'}></Button>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    fontSize: 24,
    color: Colors.primary,
    marginTop: '20%',
    marginLeft: '10%',
    fontWeight: 'bold'
  },
  subHeader: {
    fontSize: 20,
    color: Colors.secondary,
    marginTop: '5%',
    marginLeft: '10%',
    fontWeight: '600'
  }
})