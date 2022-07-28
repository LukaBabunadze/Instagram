import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ActivityIndicator, View } from 'react-native';
import Post from './components/molecules/Post';
import {
  useFonts,
  Inter_400Regular as regular,
  Inter_500Medium as medium,
  Inter_600SemiBold as semiBold,
  Inter_700Bold as bold,
  Inter_900Black as black,
} from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const BottomTab = createBottomTabNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    regular,
    medium,
    semiBold,
    bold,
    black
  })

  if(!fontsLoaded){
    return <ActivityIndicator size="large" color="blue"/>
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <BottomTab.Navigator screenOptions={{headerShown: true,  tabBarShowLabel: false, tabBarStyle: {backgroundColor: 'white', elevation: -10} }}>
          <BottomTab.Screen name="HomeScreen" options={{tabBarIcon: () => (<Octicons name="home" size={24} color="black" />)}} component={Post}/>
          <BottomTab.Screen name="Search" options={{tabBarIcon: () => (<Octicons name="search" size={24} color="black" />)}} component={Post}/>
          <BottomTab.Screen name="Reels" options={{tabBarIcon: () => (<MaterialCommunityIcons name="movie-play-outline" size={24} color="black" />)}} component={Post}/>
          <BottomTab.Screen name="Store" options={{tabBarIcon: () => (<Feather name="shopping-bag" size={24} color="black" />)}} component={Post}/>
          <BottomTab.Screen name="Profile" options={{tabBarIcon: () => (<Ionicons name="ios-person-outline" size={24} color="black" />)}} component={Post}/>
        </BottomTab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
