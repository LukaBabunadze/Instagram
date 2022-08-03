import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SignUp from "../../SignScreens/SignUp";
import SignIn from "../../SignScreens/SignIn";

const Stack = createNativeStackNavigator();

export const SignStack = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SignUp" component={SignUp}/>
            <Stack.Screen name="SignIn" component={SignIn}/>
        </Stack.Navigator>
    )
}