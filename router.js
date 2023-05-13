import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from './src/screens/auth/RegistrationScreen';
import LoginScreen from './src/screens/auth/LoginScreen';
import { HomeScreen } from "./src/screens/mainScreen/HomeScreen";
import MapScreen from "./src/screens/nestedScreens/MapScreen";
import CommentsScreen from "./src/screens/nestedScreens/CommentsScreen";
import routerOptions from "./src/routerOptions";
import { useSelector } from "react-redux";
import { authSelectors } from "./src/redux/auth/authSelectors";


const AuthStack = createStackNavigator();
const MainTab = createStackNavigator();

export const useRoute = () => {
    const isAuth = useSelector(authSelectors.getIsAuth);

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
            <MainTab.Screen options={() => ({
                ...routerOptions.mapOptions(),
            })} name="Map" component={MapScreen} />
            <MainTab.Screen options={{ headerShown: false }} name="Comments" component={CommentsScreen} />
        </MainTab.Navigator>
    );
}