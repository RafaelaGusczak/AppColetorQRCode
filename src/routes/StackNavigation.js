import { createStackNavigator } from "@react-navigation/stack";
import { useContext } from "react";
import { AuthContext } from "../contexts/Authentication";
import LoginScreen from "../pages/Login";
import HomeScreen from "../pages/Home/Home";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function StackNavigation() {

    const { isSignIn } = useContext(AuthContext);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                {!isSignIn ? (
                    <Stack.Screen name="Login" component={LoginScreen} />
                ) : (
                    <Stack.Screen name="Home" component={HomeScreen} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}