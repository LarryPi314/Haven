//universal imports; use these in every screen...
import { View, Text, StyleSheet, Alert, Image, ImageBackground, TextInput, ScrollView, TouchableOpacity, Switch } from "react-native";
import * as Colors from '../Components/Colors'
import { useState, useEffect } from "react";
import { Button } from "../Components/Button";

import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as ImagePicker from 'expo-image-picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment';
import { uploadImage } from "../Components/ImageCloudStorage";


export default function OnboardingInfo({navigation, route}) {
  const { email, uid } = route.params

  const[pfp, setPfp] = useState(null)
  const [name, setName] = useState('')
  const[phone , setPhone] = useState('')
  const[dob, setDob] = useState(null)
  const[isDatePickerVisible, setDatePickerVisibility] = useState(false)
  const [nationality, setNationality] = useState('')
  const [isHost, setIsHost] = useState(false)


  async function pickImage() {
    let res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!res.cancelled) {
      setPfp(res.assets[0].uri)
    }
  }

  function renderPfp() {
    if(pfp) {
      return(
        <TouchableOpacity onPress={() => pickImage()}>
          <Image source={{uri: pfp}} style={{width: 100, height: 100, borderRadius: 50, marginTop: 10}}></Image>
        </TouchableOpacity>
      )
    }
    else {
      return(
        <TouchableOpacity onPress={() => pickImage()}>
          <ImageBackground source={require('../assets/pfpPlaceholder.png')} style={{width: 100, height: 100, borderRadius: 100, marginTop: 10}} imageStyle={{borderRadius: 100}}>
            <FontAwesomeIcon icon={faCamera} size={27} color={Colors.blue} style={{alignSelf: 'flex-end', marginTop: '65%'}}/>
          </ImageBackground>
        </TouchableOpacity>
      )
    }
  }

  async function proceed() {
    let url = ""
    
    if(pfp != null) {
      url = await uploadImage(pfp, uid)
    } else {
      url = "https://firebasestorage.googleapis.com/v0/b/chack24-4a090.appspot.com/o/images%2FpfpPlaceholder-1.png?alt=media&token=305c049c-b353-499b-85e0-12111fb7027e"
    }

    navigation.navigate("MoreInfo", {email: email, uid: uid, name: name, dob: dob, phone: phone, nationality: nationality, isHost: isHost, pfp: url})

  }

  return(
    <View style={styles.container}>
      <Text style={styles.header}>Tell us about yourself</Text>

      <View style={{width: '100%', alignItems: 'center', marginTop: '15%'}}>
        {
          renderPfp()
        }
      </View>

      <View style={{width: '80%', marginLeft: '10%', marginTop: '10%'}}>
        <TextInput value={name} onChangeText={text => setName(text)} placeholder="Name" placeholderTextColor={Colors.secondaryDark} style={{width: '100%', color: Colors.primaryDark, marginTop: '5%', fontSize: 14}}></TextInput>
        <View style={{width: '100%', backgroundColor: Colors.secondaryDark, height: 1, marginTop: 5}}></View>
      </View>

      <View style={{width: '80%', marginLeft: '10%', marginTop: '7%'}}>
        <TextInput value={moment(dob).format("MM/DD/YYYY") == "Invalid date" ? "" : moment(dob).format("MM/DD/YYYY")} onTouchStart={() => setDatePickerVisibility(true)} placeholder="Date of Birth" placeholderTextColor={Colors.secondaryDark} style={{width: '100%', color: Colors.primaryDark, marginTop: '5%', fontSize: 14}}></TextInput>
        <View style={{width: '100%', backgroundColor: Colors.secondaryDark, height: 1, marginTop: 5}}></View>
      </View>

      <View style={{width: '80%', marginLeft: '10%', marginTop: '7%'}}>
        <TextInput value={phone} onChangeText={text => setPhone(text)} placeholder="Phone Number" placeholderTextColor={Colors.secondaryDark} style={{width: '100%', color: Colors.primaryDark, marginTop: '5%', fontSize: 14}}></TextInput>
        <View style={{width: '100%', backgroundColor: Colors.secondaryDark, height: 1, marginTop: 5}}></View>
      </View>

      <View style={{width: '80%', marginLeft: '10%', marginTop: '7%'}}>
        <TextInput value={nationality} onChangeText={text => setNationality(text)} placeholder="Nationality" placeholderTextColor={Colors.secondaryDark} style={{width: '100%', color: Colors.primaryDark, marginTop: '5%', fontSize: 14}}></TextInput>
        <View style={{width: '100%', backgroundColor: Colors.secondaryDark, height: 1, marginTop: 5}}></View>
      </View>

      <View style={{flexDirection: 'row', marginTop: '10%', marginLeft: '10%', alignItems: "center"}}>
        <Switch
            trackColor={{false: '#767577', true: Colors.primary}}
            onValueChange={() => setIsHost(!isHost)}
            value={isHost}
          ></Switch>

        <Text style={{color: Colors.primaryDark, fontSize: 16, marginLeft: '7%'}}>I am a {isHost ? "host" : "guest"}</Text>
      </View>

      <Button title="Continue" onPress={() => proceed()} backgroundColor={Colors.primary} width={"80%"} height={60} marginLeft={'10%'} color={"#fff"} marginTop={'18%'}></Button>


      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={(date) => {
          setDob(date)
          setDatePickerVisibility(false)
        }}
        onCancel={() => setDatePickerVisibility(false)}
      >
      </DateTimePickerModal>
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