import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MyButton from '../components/atoms/MyButton'
import { signOut } from 'firebase/auth'
import { getAuth } from 'firebase/auth';

const auth = getAuth();
export const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <MyButton title="Sign Out" containerStyle={{margin: 30, marginTop: 200}} onPress={() => signOut(auth)}/>
    </View>
  )
}

const styles = StyleSheet.create({})