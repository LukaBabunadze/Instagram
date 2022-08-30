import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import MyButton from '../../components/atoms/MyButton';
import { Colors } from '../../assets/colors/Colors';
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

const SignUp = ({navigation}) => {

  const [value, setValue] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
  })

  const signUp = async() => {
    if (value.email === "" && value.password === ""){
      setValue({
        ...value,
        error: "Eamil and password are mandatory"
      })
      return;
    }

    if(value.confirmPassword === value.password){
      try {
        await createUserWithEmailAndPassword(auth, value.email, value.password);
      } catch (error) {
        setValue({
          ...value,
          error: error.message,
        })
      }
    } else {
      setValue({
        ...value,
        error: "Passwords didn't match"
      })
    }
    
  }

  return (
    <View style={s.container}>
      <View style={s.flexWrapper}>
        <Ionicons name="ios-person-outline" size={130} color="black" style={s.icon}/>
        {!!value.error && <View><Text>{value.error}</Text></View>}
        <View style={s.formWrapper}>
          <TextInput value={value.email} onChangeText={(text) => setValue({...value, email: text})} placeholder="Email address" style={s.inputStyle}/>
          <TextInput value={value.password} onChangeText={(text) => setValue({...value, password: text})} secureTextEntry={true} placeholder="Password" style={s.inputStyle}/>
          <TextInput value={value.confirmPassword} onChangeText={(text) => setValue({...value, confirmPassword: text})} secureTextEntry={true} placeholder="Confirm Password" style={s.inputStyle}/>
          <MyButton title="Sign Up" containerStyle={s.buttonStyle} onPress={signUp}/>
        </View>
      </View>
      <Text style={s.accountText}>Already have an account? <Text style={s.loginText} onPress={() => navigation.navigate("SignIn")}>Log in.</Text></Text>
    </View>
  )
}

export default SignUp

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
      marginTop: 170,
    },
    formWrapper: {
      height: 215,
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
    accountText: {
      marginBottom: 15,
      fontFamily: 'regular',
      fontSize: 14,
      color: Colors.black,
    },
    loginText: {
      fontFamily: 'medium',
      color: Colors.sky
    }
})