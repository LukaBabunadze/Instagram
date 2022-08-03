import { StyleSheet, Text, ActivityIndicator, View } from 'react-native';
import {
  useFonts,
  Inter_400Regular as regular,
  Inter_500Medium as medium,
  Inter_600SemiBold as semiBold,
  Inter_700Bold as bold,
  Inter_900Black as black,
} from '@expo-google-fonts/inter';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './cofig/firebase';
import SignUp from './screens/SignScreens/SignUp';
import SignIn from './screens/SignScreens/SignIn';
import BottomStack from './screens/navigation/BottomStack';
import { useAuthentication } from './utils/hooks/useAuthentication';
import { SignStack } from './screens/navigation/stackNavigators/Stacks';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {

  const { user } = useAuthentication();

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
        {
          user ? (<BottomStack />) : (<SignStack/>)
        }
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
