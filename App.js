/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Dimensions
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './src/screens/Home';
import Favorites from './src/screens/Favorites';

//importing icons
import Foundation from 'react-native-vector-icons/Foundation'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

// height and width of the screen
const {height, width} = Dimensions.get('screen')

const Tab = createBottomTabNavigator();

const App = () => {


  return (
    <SafeAreaProvider style={{flex:1}}>
      <StatusBar barStyle={'dark-content'} />
      <NavigationContainer>
      <Tab.Navigator
        
       screenOptions={({ route }) => ({
      headerShown: false,
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle : {
          backgroundColor: 'black'
        }
      })}
      >
        <Tab.Screen  name="Home" component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Foundation
              name="home"
              size={28}
              color={focused ? 'white' : 'grey'}
            />
          )
        }} />
        <Tab.Screen name="Favorites" component={Favorites} 
         options={{
          tabBarIcon: ({focused}) => (
            <Feather
              name="heart"
              size={28}
              color={focused ? 'white' : 'grey'}
            />
          )
        }}
        />

<Tab.Screen name="Updates" component={Favorites} 
         options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="notifications-outline"
              size={28}
              color={focused ? 'white' : 'grey'}
            />
          )
        }}
        />
         <Tab.Screen name="You" component={Favorites} 
         options={{
          tabBarIcon: ({focused}) => (
            <Octicons
              name="person"
              size={28}
              color={focused ? 'white' : 'grey'}
            />
          )
        }}
        />
         <Tab.Screen name="Cart" component={Favorites} 
         options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="cart-variant"
              size={28}
              color={focused ? 'white' : 'grey'}
            />
          )
        }}
        />
      </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
