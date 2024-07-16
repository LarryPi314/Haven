//universal imports; use these in every screen...
import { View, Text, StyleSheet, Alert, Image, ImageBackground, TextInput, ScrollView } from "react-native";
import * as Colors from '../Components/Colors'
import { useState, useEffect } from "react";
import { Button } from "../Components/Button";
import { getStays, getUser } from "../Components/FunctionCalls";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell, faChevronDown, faLocationPin, faMagnifyingGlass, faPerson, faSliders, faUser } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";


export default function Social({navigation, route}) {
  let peopleMsgs = [["Join us at Grace Church this Saturday for a special lunch event dedicated to supporting our refugees. We are offering a wide range of complimentary meals to help everyone feel at home. All refugees are invited to share in this meal and connect with local resources.","https://firebasestorage.googleapis.com/v0/b/chack24-4a090.appspot.com/o/images%2Fperson1.png?alt=media&token=16eb78bf-cb11-49de-ae6c-291a1f12e501", "Special Sermons", "Rabbi Ravi", "Mar 30"],
["We're seeking for help with moving and are offering money for refugees looking for work. We can offer 15 euros/hour and housing for one night. If you're interested and available to help, please contact us for more details.", "https://firebasestorage.googleapis.com/v0/b/chack24-4a090.appspot.com/o/images%2Fperson2.png?alt=media&token=ef1c8b26-63c3-478f-b598-292f526815ba", "Call for Help", "Pope Paul", "Apr 2"],
["Hey everyone, if you're a refugee in need of English translation assistance, I'm here to help. I can provide language support to help you understand documents, fill out forms, or navigate daily conversations. Please feel free to reach out if you need anything.","https://firebasestorage.googleapis.com/v0/b/chack24-4a090.appspot.com/o/images%2Fperson3.jpeg?alt=media&token=5283b4c1-3239-4843-9dbd-fc151cb3a02d", "Translation Assistance", "Teresa Andreu", "Apr 6"],
]
  
  return(
    <View style={styles.container}>
      <View style={{flexDirection: 'row', width: '90%', alignSelf: 'center', marginTop: '17%'}}>
        <FontAwesomeIcon icon={faLocationPin} color={Colors.secondaryDark} size={15}></FontAwesomeIcon>
        <Text style={{color: Colors.secondaryDark, marginLeft: '2%', fontSize: 15}}>Warsaw, Poland</Text>
        <View style={{marginLeft: '2%'}}></View>
        <FontAwesomeIcon icon={faChevronDown} color={Colors.secondaryDark} size={12}></FontAwesomeIcon>
        <View style={{flex: 1}}></View>
        <FontAwesomeIcon icon={faUser} color={Colors.secondaryDark} size={20}></FontAwesomeIcon>
        <View style={{marginLeft: '5%'}}></View>
        <FontAwesomeIcon icon={faBell} color={Colors.secondaryDark} size={20}></FontAwesomeIcon>
      </View>
  
      <ScrollView style={{width: '100%', marginTop: '10%'}} contentContainerStyle={{alignItems: 'center'}}>
        {
          peopleMsgs.map((person, index) => {
            return(
              <View key={index} style={{width: '90%', backgroundColor: '#fff', height: 300, marginBottom: '10%', alignItems: 'center', paddingTop: '5%', borderRadius: 10}}>
                <View style={{width: '90%', flexDirection: 'row', alignItems: 'start'}}>
                  
                  <Image source={{uri: person[1]}} width={75} height={75} borderRadius={1000}></Image>
                    
  
                  <View style={{flexDirection: 'column', alignItems: 'right', marginLeft: '7%'}}>
                    <Text style={{marginTop: '3%', fontSize: 20, fontWeight: 'bold', color: Colors.primaryDark}}>{person[2]}</Text>
                    <Text style={{marginTop: '3%', fontSize: 12, color: Colors.secondaryDark}}>{person[3]}</Text>
                    <Text style={{marginTop: '3%', fontSize: 10, color: Colors.secondaryDark}}>{person[4]}</Text>
                  </View>
                </View>
                    
                
                <View style={{alignItems: 'flex-start', width: '90%'}}>
                    <Text style={{marginTop: '6%', fontSize: 16, color: Colors.secondaryDark}}>{person[0]}</Text>
                 </View>
              </View>
            )
          })
        }
      </ScrollView>
    </View>
  )
  }



const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: Colors.background,
  alignItems: 'center',
},
})