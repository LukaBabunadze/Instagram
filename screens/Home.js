import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MyButton from '../components/atoms/MyButton'
import { signOut } from 'firebase/auth'
import { getAuth } from 'firebase/auth';
import { getAllPosts } from '../api/postApi';
import { FlatList } from 'react-native';
import Post from '../components/molecules/Post'; 
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const auth = getAuth();

export const Home = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts().then(res => setPosts(res))
  }, [])

  

  return (
    
      <SafeAreaProvider>
        <SafeAreaView style={s.container}>
          <View style={s.container}>
            <View style={s.container}>
            <FlatList data={posts} renderItem={({item}) => <Post image={item.url} key={item.id} status={item.title} id={item.id} thumbnail={item.thumbnailUrl} />} />
            </View>
            {/* <MyButton title="Sign Out" containerStyle={{margin: 30, marginTop: 200}} onPress={() => signOut(auth)}/> */}
          </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  }
})