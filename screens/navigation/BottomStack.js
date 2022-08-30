import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Search, Reels, Store, Profile } from '../index'
import { Octicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import { HomeStack } from './stackNavigators/Stacks'

const BottomTab = createBottomTabNavigator();

const BottomStack = () => {
  return (
        <BottomTab.Navigator screenOptions={{headerShown: false,  tabBarShowLabel: false, tabBarStyle: {backgroundColor: 'white', elevation: -10} }}>
          <BottomTab.Screen 
            name="HomeScreen" 
            options={{tabBarIcon: ({focused}) => (focused ? <MaterialCommunityIcons name="home-variant" size={28} color="black" /> : <Octicons name="home" size={24} color="black" />)}} 
            component={HomeStack}/>
          <BottomTab.Screen 
            name="Search" 
            options={{tabBarIcon: ({focused}) => (focused ? <FontAwesome name="search" size={25} color="black" /> : <Octicons name="search" size={24} color="black" />)}} 
            component={Search}/>
          <BottomTab.Screen 
            name="Reels" 
            options={{tabBarIcon: ({focused}) => (focused ? <MaterialCommunityIcons name="movie-play" size={26} color="black" /> : <MaterialCommunityIcons name="movie-play-outline" size={26} color="black" />)}} 
            component={Reels}/>
          <BottomTab.Screen 
            name="Store" 
            options={{tabBarIcon: ({focused}) => (focused ? <Entypo name="shopping-bag" size={24} color="black" /> : <Feather name="shopping-bag" size={24} color="black" />)}} 
            component={Store}/>
          <BottomTab.Screen 
            name="Profile" 
            options={{tabBarIcon: ({focused}) => (focused ? <Ionicons name="person" size={24} color="black" /> : <Ionicons name="ios-person-outline" size={24} color="black" />)}} 
            component={Profile}/>
        </BottomTab.Navigator>
  )
}

export default BottomStack

const styles = StyleSheet.create({})