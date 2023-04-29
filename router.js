import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from './src/screens/auth/RegistrationScreen';
import LoginScreen from './src/screens/auth/LoginScreen';
import { HomeScreen } from "./src/screens/mainScreen/HomeScreen";
import MapScreen from "./src/screens/nestedScreens/MapScreen";
import CommentsScreen from "./src/screens/nestedScreens/CommentsScreen";


const AuthStack = createStackNavigator();
const MainTab = createStackNavigator();

export const useRoute = (isAuth) => {
    if (!isAuth) {
        return (
            <AuthStack.Navigator initialRouteName="Login">
                <AuthStack.Screen name="Registration" component={RegistrationScreen} options={{ headerShown: false }} />
                <AuthStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            </AuthStack.Navigator>
        );
    }
    return (
        <MainTab.Navigator>
            <MainTab.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
            <MainTab.Screen options={{ headerShown: false }} name="Map" component={MapScreen} />
            <MainTab.Screen options={{ headerShown: false }} name="Comment" component={CommentsScreen} />
        </MainTab.Navigator>
    );
}