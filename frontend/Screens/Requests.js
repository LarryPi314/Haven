//universal imports; use these in every screen...
import { View, Text, StyleSheet, Alert, Image, ImageBackground, TextInput, ScrollView } from "react-native";
import * as Colors from '../Components/Colors'
import { useState, useEffect } from "react";
import { Button } from "../Components/Button";

export default function Home({navigation, route}) {
  return(
    <View style={styles.container}>
      <Text style={styles.subHeader}>Hey there, let's</Text>
      <Text style={styles.header}>View Requests</Text>

      <ScrollView>
        <View style={{borderRadius: 10, width: '90%', marginTop: '7.5%', alignSelf: 'center', backgroundColor: 'white', height: 200, shadowColor: '#000', shadowOpacity: 0.35, shadowOffset: {width: 1, height: 3}, flexDirection: 'row', alignItems: 'center', padding: '5%'}}>
          <Image source={{uri: "https://firebasestorage.googleapis.com/v0/b/chack24-4a090.appspot.com/o/images%2FHouse2.png?alt=media&token=74e05948-df7a-4418-b7be-3e0d5371b085"}} height={150} width={150}></Image>
          <View style={{marginLeft: '7%'}}>
            <Text style={{color: Colors.primaryDark, fontSize: 16, fontWeight: '600'}}>Warsaw, Poland</Text>
            <Text style={{color: Colors.secondaryDark, fontSize: 14}}>March 21, 2024</Text>
            <Text style={{color: Colors.primaryDark, fontSize: 14, marginTop: '25%'}}>Stay ended with{'\n'}Michal Bednarek.{`\n`}Safe travels!</Text>
          </View>
        </View>

        <View style={{borderRadius: 10, width: '90%', marginTop: '15%', alignSelf: 'center', backgroundColor: 'white', height: 200, shadowColor: '#000', shadowOpacity: 0.35, shadowOffset: {width: 1, height: 3}, flexDirection: 'row', alignItems: 'center', padding: '5%'}}>
          <Image source={{uri: "https://firebasestorage.googleapis.com/v0/b/chack24-4a090.appspot.com/o/images%2FHouse2.png?alt=media&token=74e05948-df7a-4418-b7be-3e0d5371b085"}} height={150} width={150}></Image>
          <View style={{marginLeft: '7%'}}>
            <Text style={{color: Colors.primaryDark, fontSize: 16, fontWeight: '600'}}>Warsaw, Poland</Text>
            <Text style={{color: Colors.secondaryDark, fontSize: 14}}>March 14, 2024</Text>
            <Text style={{color: Colors.primaryDark, fontSize: 14, marginTop: '25%'}}>Stay Approved with{'\n'}Michal Bednarek.</Text>
          </View>
        </View>

        <View style={{borderRadius: 10, width: '90%', marginTop: '15%', marginBottom: '15%', alignSelf: 'center', backgroundColor: 'white', height: 200, shadowColor: '#000', shadowOpacity: 0.35, shadowOffset: {width: 1, height: 3}, flexDirection: 'row', alignItems: 'center', padding: '5%'}}>
          <Image source={{uri: "https://firebasestorage.googleapis.com/v0/b/chack24-4a090.appspot.com/o/images%2Fstud1.png?alt=media&token=f2dbc2d4-5936-48ef-871b-c5acbb7c4be7"}} height={150} width={150}></Image>
          <View style={{marginLeft: '7%'}}>
            <Text style={{color: Colors.primaryDark, fontSize: 16, fontWeight: '600'}}>Plovdiv, Bulgaria</Text>
            <Text style={{color: Colors.secondaryDark, fontSize: 14}}>March 7, 2024</Text>
            <Text style={{color: Colors.primaryDark, fontSize: 14, marginTop: '25%'}}>Maria Stoyanoa sent{'\n'}you a message about{'\n'}your request.</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
  fontSize: 27,
  color: Colors.primaryDark,
  marginTop: '2%',
  marginLeft: '5%',
  marginBottom: '7.5%',
  fontWeight: 'bold'
  },
  subHeader: {
    fontSize: 20,
    color: Colors.secondaryDark,
    marginTop: '25%',
    marginLeft: '5%',
    fontWeight: '600'
  }
})