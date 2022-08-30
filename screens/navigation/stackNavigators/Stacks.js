import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SignUp from "../../SignScreens/SignUp";
import SignIn from "../../SignScreens/SignIn";
import { Home } from "../../Home";
import Comments from "../../Comments";

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Comments" component={Comments} options={{headerShown: true}}/>
    </Stack.Navigator>
  )
}

export const SignStack = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SignUp" component={SignUp}/>
            <Stack.Screen name="SignIn" component={SignIn}/>
        </Stack.Navigator>
    )
}