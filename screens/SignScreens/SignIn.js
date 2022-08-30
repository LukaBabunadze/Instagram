import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import MyButton from '../../components/atoms/MyButton';
import { Colors } from '../../assets/colors/Colors';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

const SignIn = ({navigation}) => {

  const [value, setValue] = useState({
    email: "",
    password: "",
    error: "",
  })

  const signIn = async() => {
    if (value.email === "" && value.password === ""){
      setValue({
        ...value,
        error: "Eamil and password are mandatory"
      })
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      })
    }
  }

  return (
    <View style={s.container}>
      <View style={s.flexWrapper}>
        {!!value.error && <View><Text>{value.error}</Text></View>}
        <Ionicons name="ios-person-outline" size={130} color="black" style={s.icon}/>
        <View style={s.formWrapper}>
          <TextInput value={value.email} onChangeText={(text) => setValue({...value, email: text})} placeholder="Email address" style={s.inputStyle}/>
          <TextInput value={value.password} onChangeText={(text) => setValue({...value, password: text})} secureTextEntry={true} placeholder="Password" style={s.inputStyle}/>
          <MyButton title="Log In" containerStyle={s.buttonStyle} onPress={signIn}/>
          <MyButton title="Go Back" containerStyle={s.backButtonStyle} titleStyle={s.backButtonStyle} onPress={() => navigation.goBack()}/>
        </View>
      </View>
    </View>
  )
}

export default SignIn

const s = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: 32,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    flexWrapper: {
      width: '100%',
      marginTop: 190,
    },
    formWrapper: {
      height: 210,
      justifyContent: 'space-between',
    },
    inputStyle: {
      borderRadius: 6,
      borderWidth: 1.4,
      borderColor: Colors.gray,
      width: '100%',
      height: 48,
      paddingHorizontal: 14,
      fontFamily: 'regular',
    },
    buttonStyle: {
      width: '100%',
    },
    icon: {
      alignSelf: 'center',
      marginBottom: 15,
    },
    backButtonStyle: {
      backgroundColor: Colors.white,
      color: 'black'
    }
})