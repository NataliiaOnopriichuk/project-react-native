import { ImageBackground, StyleSheet } from "react-native";

const BGImage = require("../../assets/images/PhotoBG.jpg");

export const BgnImage = ({ children }) => {
  return (
    <ImageBackground source={BGImage} style={styles.image}>
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
