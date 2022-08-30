import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { cs } from '../atoms/commonStyles';
import { useNavigation } from '@react-navigation/native';
 
const Post = ({thumbnail, image, status, id}) => {

  const navigation = useNavigation();

  return (
    <View style={s.mainContainer}>
      <View style={s.container}>
        <View style={s.postHeaderWrapper}>
          <View style={s.postHeader}>
            <Pressable style={s.userImageWrapper}>
              <Image style={s.userImage} source={{uri: thumbnail}}/>
            </Pressable>
            <Text style={s.user}>lukababunadze</Text>
          </View>
          <Entypo name="dots-three-vertical" style={s.headerIconStyle} size={16} color="black" />
        </View>
        <Image style={s.image} source={{uri: image}}/>
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
        <Text style={s.statusWrapper}>
          <Text style={cs.userName}>lukababunadze </Text>
          {status}
        </Text>
        <Pressable style={s.likedContainer}>
          <View style={s.userLikedWrapper}>
            <Image style={[s.userLiked, {zIndex: 3}]} source={{uri: image}}/>
            <Image style={[s.userLiked, {zIndex: 2}]} source={{uri: image}}/>
            <Image style={[s.userLiked, {zIndex: 1}]} source={{uri: image}}/>
          </View>
          <Text style={s.whoLikedText}>Liked by <Text style={s.otherUserName}>annanas.si</Text> and <Text style={s.otherUserName}>7 others</Text></Text>
        </Pressable>
        <Text onPress={() => navigation.navigate("Comments", {id: id})} style={[s.timeText, s.commentNavigation]}>View all 5 Comments</Text>
        <Text style={s.timeText}>14 hours ago</Text>
      </View>
    </View>
  )
}

export default Post;

const s = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 10,
    marginBottom: 30,
  },
  container: {
    height: 450,
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
    height: 40,
    width: 40,
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
  statusWrapper: {
    marginLeft: 15,
  },
  likedContainer: {
    marginLeft: 3,
    marginRight: 15,
    // backgroundColor: 'red',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  userLiked: {
    height: 30,
    width: 30,
    borderRadius: 30,
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
  commentNavigation: {
    fontSize: 13,
    marginTop: -3,
    color: '#9D8E8E',
  },
  timeText: {
    color: 'gray',
    fontSize: 10,
    marginLeft: 15,
    marginTop: 7,
    fontFamily: 'regular'
  }
})