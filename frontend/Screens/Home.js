//universal imports; use these in every screen...
import { View, Text, StyleSheet, Alert, Image, ImageBackground, TextInput, ScrollView, Touchable, TouchableOpacity, Modal } from "react-native";
import * as Colors from '../Components/Colors'
import { useState, useEffect } from "react";
import { Button } from "../Components/Button";
import { getStays, getUser } from "../Components/FunctionCalls";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell, faChevronDown, faLocationPin, faMagnifyingGlass, faPerson, faSliders, faUser } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

export default function Home({navigation, route}) {
  const { uid } = route.params

  const [user, setUser] = useState({})

  const [stays, setStays] = useState([])
  const [hosts, setHosts] = useState([{name: 'loading'}, {name: 'loading'}, {name: 'loading'}, {name: 'loading'}, {name: 'loading'}, {name: 'loading'}, {name: 'loading'}, {name: 'loading'}, {name: 'loading'}, {name: 'loading'}, {name: 'loading'}, {name: 'loading'}, {name: 'loading'}, {name: 'loading'}])

  const [search, setSearch] = useState('')

  useEffect(() => {
    async function fetchData() {
      let staysRes = await getStays()
      setStays(staysRes)

      let user = await getUser(uid)
      setUser(user)

      let temporaryHosts = []

      /*
      staysRes.forEach(async (stay) => {
        let temporaryHostModel = await getUser(stay.hostID)
        console.log(temporaryHostModel)
        temporaryHosts.push(temporaryHostModel)
      })
      */

      //convert the foreach loop above to a for loop
      for(let i = 0; i < staysRes.length; i++) {
        console.log(staysRes[i].hostID)
        let temporaryHostModel = await getUser(staysRes[i].hostID)
        temporaryHosts.push(temporaryHostModel)
      }

      console.log(temporaryHosts)
      setHosts(temporaryHosts)
    }
    fetchData()
  }, [])

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

      <View style={{width: '90%', flexDirection: 'row', alignItems: 'center', marginTop: '5%', justifyContent: 'space-between'}}>
        <View style={{width: '83%', height: 45, backgroundColor: '#fff', borderRadius: 50, flexDirection: 'row', alignItems: 'center', paddingLeft: '5%', shadowColor: '#000', shadowOpacity: 0.35, shadowOffset: {width: 1, height: 3}}}>
          <FontAwesomeIcon icon={faMagnifyingGlass} color={Colors.secondaryDark} size={20}></FontAwesomeIcon>
        </View>

        <FontAwesomeIcon icon={faSliders} size={27} color={Colors.secondaryDark}></FontAwesomeIcon>
      </View>

      <ScrollView style={{width: '100%', marginTop: '10%'}} contentContainerStyle={{alignItems: 'center'}}>
        {
          stays.map((stay, index) => {
            return(
              <TouchableOpacity onPress={() => navigation.navigate("Listing", {user: user, stay: stay, host: hosts[index]})} activeOpacity={0.95} key={index} style={{width: '90%', backgroundColor: '#fff', height: 450, marginBottom: '10%', alignItems: 'center', paddingTop: '3%', borderRadius: 10}}>
                <Image source={{uri: stay.images[0]}} width={'95%'} height={300} borderRadius={10}></Image>

                <View style={{alignItems: 'flex-start', width: '90%', marginLeft: '5%'}}>
                  <Text style={{marginTop: '7%', fontSize: 16, fontWeight: 'bold', color: Colors.primaryDark}}>{stay.city}, {stay.country}</Text>
                  <Text style={{marginTop: '3%', fontSize: 14, color: Colors.secondaryDark}}>{Math.floor(Math.random()*100)} kilometers away</Text>
                  <Text style={{marginTop: '2%', fontSize: 14, color: Colors.secondaryDark}}>{moment(stay.availability[0]).format('MMM D')}{stay.availability.length > 1 ? " - " + moment(stay.availability[1]).format('MMM D') : " onwards"}</Text>
                  <Text style={{marginTop: '2%', fontSize: 14, color: Colors.secondaryDark}}>Stay with <Text style={{color: Colors.primaryDark, fontWeight: '600'}}>{hosts[index].name}</Text></Text>

                </View>
              </TouchableOpacity>
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