import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//navigation imports
import { NavigationContainer, StackActions, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import * as Colors from './Components/Colors'

//import screens
import Landing from './Screens/Landing';
import SignUp from './Screens/SignUp';
import Login from './Screens/Login';
import OnboardingInfo from './Screens/OnboardingInfo';
import MoreInfo from './Screens/MoreInfo';
import CreateStay from './Screens/CreateStay';
import Home from './Screens/Home';
import Social from './Screens/Social';
import Requests from './Screens/Requests';
import Listing from './Screens/Listing';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPaperPlane, faHome, faInbox, faH, faBullhorn } from '@fortawesome/free-solid-svg-icons'

//navigation stack
const Stack = createNativeStackNavigator();
//navbar
const Tab = createBottomTabNavigator();

function NavBar() {
  return(
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = faHome;
          } else if (route.name === 'Social') {
            iconName = faBullhorn;
          } else if (route.name === 'Requests') {
            iconName = faInbox;
          }
          return(
            <View>
              <FontAwesomeIcon style={{alignSelf: 'center'}} icon={iconName} color={focused ? Colors.primary : Colors.secondaryDark} size={30}></FontAwesomeIcon>
              {
                focused
                ?
                <View style={{marginTop: '5%', width: 40, backgroundColor: Colors.primary, height: 3}}/>
                :
                <View style={{marginTop: '5%', height: 3}}/>
              }
            </View>
          )
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingTop: 10,
        }
      })}
    >
      <Tab.Screen name="Social" component={Social} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Requests" component={Requests} />
    </Tab.Navigator>
  
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home_User" component={Landing} />
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="OnboardingInfo" component={OnboardingInfo} />
        <Stack.Screen name="MoreInfo" component={MoreInfo} />
        <Stack.Screen name="CreateStay" component={CreateStay} />
        <Stack.Screen name="Home" component={NavBar} />
        <Stack.Screen name="Listing" component={Listing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
