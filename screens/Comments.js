import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getPostComments } from '../api/postApi'

const Comments = ({route}) => {
  
  const {id} = route.params
  const [comments, setComments] = useState([])

  useEffect(() => {
    getPostComments(id).then(res => setComments(res))
  }, [])

  return (
    <View style={s.container}>
      <FlatList 
        data={comments}  
        renderItem={({item}) => 
          <Text style={s.textWapper}>
            <Text style={s.name}>{item.email.slice(0, item.email.indexOf("@"))}  </Text>{item.body}
            {/* <View style={s.replySend}>
              <Text>Reply</Text>
              <Text>Send</Text>
            </View> */}
          </Text>}
      />
    </View>
  )
}

export default Comments

const s = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  textWapper: {
    marginTop: 12,
    flexDirection: "row",
  },
  name: {
    fontFamily: "bold",
  },
  replySend: {
    backgroundColor: 'red',
    flex: 1,
    flexDirection: "row"
  }
})