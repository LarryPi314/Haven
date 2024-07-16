//universal imports; use these in every screen...
import { View, Text, StyleSheet, Alert, Image, ImageBackground, TextInput, ScrollView, Dimensions, Linking } from "react-native";
import * as Colors from '../Components/Colors'
import { useState, useEffect } from "react";
import { Button } from "../Components/Button";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures'
import Modal from "react-native-modal";

export default function Listing({navigation, route}) {
  const [modalVisible, setModalVisible] = useState(false)

  const { user, stay, host } = route.params
  const [image, setImage] = useState(0)
  const [message, setMessage] = useState('')
  console.log(stay)

  return(
    <View style={styles.container}>
    <ScrollView>
      <GestureRecognizer
        onSwipeLeft={() => {
          if(image < stay.images.length - 1) {
            setImage(image + 1)
          } 
        }}
        onSwipeRight={() => {
          if(image > 0) {
            setImage(image - 1)
          }
        }}
      >
        <Image source={{uri: stay.images[image]}} height={Dimensions.get('screen').height * (0.4)} width={Dimensions.get('screen').width}></Image>
      </GestureRecognizer>

      <Text style={{fontSize: 22, color: Colors.primaryDark, marginTop: '10%', marginLeft: '5%', fontWeight: 'bold'}}>{stay.city}, {stay.country}</Text>
      <Text onPress={() => Linking.openURL(`maps:0,0?q=${stay.address}`)} style={{fontSize: 18, color: Colors.secondaryDark, marginTop: '2%', marginLeft: '5%'}}>{stay.address}</Text>
      
      <View style={{width: '90%', marginTop: '10%'}}>
        <Text style={{marginLeft: '5%', fontSize: 16, fontWeight: '600'}}>Description</Text>
        <View style={{marginLeft: '5%', width: '100%', borderWidth: 1, borderColor: Colors.secondaryDark, marginBottom: '5%', marginTop: '2%'}}></View>
        <Text numberOfLines={6} style={{fontSize: 14, color: Colors.primaryDark, marginLeft: '5%'}}>"{stay.description}"</Text>
      </View>

      <View style={{width: '90%', marginTop: '10%', alignSelf: 'center'}}>
        <Text style={{fontSize: 16, fontWeight: '600'}}>Capacity</Text>
        <View style={{width: '100%', borderWidth: 1, borderColor: Colors.secondaryDark, marginBottom: '5%', marginTop: '2%'}}></View>
        <Text>• <Text style={{fontWeight: '600'}}>{stay.capacity.numBeds} Beds</Text> Available</Text>
        <Text>• <Text style={{fontWeight: '600'}}>{stay.capacity.numBaths} Bathrooms</Text> Available</Text>
        <Text>• <Text style={{fontWeight: '600'}}>Not occupied</Text></Text>
      </View>

      <View style={{width: '90%', alignSelf: 'center', flexDirection: 'row', marginTop: '10%', alignItems: 'center', paddingRight: '5%'}}>
        <Image source={{uri: host.pfp}} height={80} width={80} borderRadius={75}></Image>
        <Text style={{marginLeft: '10%', fontSize: 18, color: Colors.secondaryDark}}>Stay with{'\n'}<Text style={{color: Colors.primaryDark, fontWeight: '600'}}>{host.name}</Text></Text>
      </View>

      <View style={{width: '90%', marginTop: '5%', alignSelf: 'center'}}>
        <Text numberOfLines={6} style={{fontSize: 14, color: Colors.primaryDark}}>"{host.bio}"</Text>
      </View>

      <View style={{width: '90%', marginLeft: '5%', borderColor: Colors.secondaryDark, marginBottom: '5%', marginTop: '10%'}}></View>

      {
        stay.tags.map((tag, index) => {
          return(
            <View>
              <View style={{marginTop: "5%", alignSelf: 'center', width: '90%', flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>{tag.label}</Text>
                <Text>{tag.value}</Text>
              </View>
              <View style={{width: '90%', marginLeft: '5%', borderWidth: 1, borderColor: Colors.secondaryDark, marginTop: '2%'}}></View>
            </View>
            
          )
        })
      }

      <Button title="Request Stay" onPress={() => setModalVisible(true)} backgroundColor={Colors.primary} width={"80%"} height={60} marginLeft={'10%'} color={"#fff"} marginTop={'20%'} marginBottom={'20%'}></Button>

      <Modal isVisible={modalVisible} onBackdropPress={() => setModalVisible(false)}>
        <View style={{backgroundColor: "#fff", width: '90%', height: '50%', alignSelf: 'center', borderRadius: 10}}>
          <Text style={{marginLeft: '10%', marginTop: '10%', fontSize: 18, fontWeight: '600', color: Colors.primaryDark}}>Send Message</Text>
          <View style={{width: '80%', marginLeft: '10%', marginTop: '7%', borderWidth: 1, borderColor: Colors.secondaryDark, padding: 15, height: 200, borderRadius: 10}}>
            <TextInput multiline value={message} onChangeText={text => setMessage(text)} placeholder={`Reach out to ${host.name}`} placeholderTextColor={Colors.secondaryDark} style={{width: '100%', color: Colors.primaryDark, fontSize: 14}}></TextInput>
          </View>
          <Button title="Send" onPress={() => {Alert.alert("Message Sent", `${host.name} will be in touch shortly!`); setModalVisible(false)}} backgroundColor={Colors.primary} width={"80%"} height={60} marginLeft={'10%'} color={"#fff"} marginTop={'10%'}></Button>
        </View>
      </Modal>


    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
})