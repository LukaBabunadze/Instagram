import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import { Colors } from '../../assets/colors/Colors'

const MyButton = ({title, onPress, containerStyle, titleStyle}) => {
  return (
    <Pressable onPress={onPress} style={[s.container, containerStyle]}>
      <Text style={[s.text, titleStyle]}>{title}</Text>
    </Pressable>
  )
}

export default MyButton

const s = StyleSheet.create({
    text: {
      fontFamily: 'semiBold',
      fontSize: 16,
      color: Colors.white
    },
    container: {
      backgroundColor: Colors.sky,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
    }
})