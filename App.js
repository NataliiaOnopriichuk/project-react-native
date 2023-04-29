import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useFonts } from "expo-font";
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';


import { useRoute } from './router';



SplashScreen.preventAutoHideAsync();



export default function App() {

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
  });

  const routing = useRoute({});

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return (
      <ActivityIndicator style={styles.loader} color="#FF6C00" />
    )
  }



  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <NavigationContainer>
        {routing}
      </NavigationContainer>
    </View>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  loader: {
    width: 100,
    height: 100,
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
});

