import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

let imageUrl = 'https://img.redbull.com/images/c_crop,x_1322,y_0,h_3333,w_2666/c_fill,w_790,h_878/q_auto:low,f_auto/redbullcom/2022/4/25/l3emaoz6htq6co5i9upr/best-of-surf-2021-art';
const Post = () => {
  return (
    <View style={s.mainContainer}>
      <View style={s.container}>
        <View style={s.postHeaderWrapper}>
          <View style={s.postHeader}>
            <Pressable style={s.userImageWrapper}>
              <Image style={s.userImage} source={{uri: imageUrl}}/>
            </Pressable>
            <Text style={s.user}>lukababunadze</Text>
          </View>
          <Entypo name="dots-three-vertical" style={s.headerIconStyle} size={16} color="black" />
        </View>
        <Image style={s.image} source={{uri: imageUrl}}/>
      </View>
      <View>
        <View style={s.iconContainer}>
          <View style={s.likeMessageShareIconsWrapper}>
            <Feather name="heart" style={s.iconsGroup} size={24} color="black" />
            <Feather name="message-circle" style={s.iconsGroup} size={24} color="black" />
            <Feather name="navigation" size={24} color="black" />
          </View>
          <View style={s.imageCounterContainer}>
            <Text>ooo</Text>
          </View>
          <View>
            <Feather name="save" size={24} color="black" />
          </View>
        </View>
        <Pressable style={s.likedContainer}>
          <View style={s.userLikedWrapper}>
            <Image style={[s.userLiked, {zIndex: 3}]} source={{uri: imageUrl}}/>
            <Image style={[s.userLiked, {zIndex: 2}]} source={{uri: imageUrl}}/>
            <Image style={[s.userLiked, {zIndex: 1}]} source={{uri: imageUrl}}/>
          </View>
          <Text style={s.whoLikedText}>Liked by <Text style={s.otherUserName}>annanas.si</Text> and <Text style={s.otherUserName}>7 others</Text></Text>
        </Pressable>
        <Text style={s.timeText}>14 hours ago</Text>
      </View>
    </View>
  )
}

export default Post;

const s = StyleSheet.create({
  mainContainer: {
    marginTop: 200,
    height: '100%',
    width: '100%',
  },
  container: {
    height: '52%',
    width: '100%',
    justifyContent: 'space-between',
  },
  image: {
    height: '88%',
  },
  postHeaderWrapper: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  postHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  userImageWrapper: {
    height: '80%',
    width: '11%',
    marginRight: 10,
    marginLeft: 15,
    padding: 2,
    borderWidth: 2,
    borderRadius: 22,
    borderColor: 'purple'
  },
  userImage: {
    height: '100%',
    width: '100%',
    borderRadius: 22,
  },
  user: {
    fontFamily: 'semiBold',
  },
  headerIconStyle: {
    marginRight: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  likeMessageShareIconsWrapper: {
    flexDirection: 'row',
    flex: 1,
  },
  iconsGroup: {
    marginRight: 10,
  },
  imageCounterContainer: {
    flex: 1,
  },
  likedContainer: {
    marginLeft: 13,
    marginRight: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  userLiked: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginRight: -10,
    borderWidth: 2,
    borderColor: 'white',
  },
  whoLikedText: {
    marginLeft: 20,
    fontFamily: 'regular'
  },
  otherUserName: {
    fontFamily: 'semiBold'
  },
  userLikedWrapper: {
    flexDirection: 'row',
  },
  timeText: {
    color: 'gray',
    fontSize: 11,
    marginLeft: 15,
    marginTop: 5,
    fontFamily: 'regular'
  }
})