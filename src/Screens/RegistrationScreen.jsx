import { useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const BGImage = require("../assets/images/PhotoBG.jpg");

export default function RegistrationScreen() {
  //   const [formData, setFormData] = useState(initialState);
  //   const [image, setImage] = useState(null);
  const [showPassword, setShowPassword] = useState(true);

  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <ImageBackground source={BGImage} style={styles.image}>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Registration</Text>
          <View style={styles.form}>
            <TextInput
              style={{ ...styles.input, marginBottom: 16 }}
              placeholder="Login"
              placeholderTextColor={"#BDBDBD"}
            />
            <TextInput
              style={{ ...styles.input, marginBottom: 16 }}
              placeholder="Email address"
              placeholderTextColor={"#BDBDBD"}
            />
            <View>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={"#BDBDBD"}
                secureTextEntry={showPassword}
              />
              {showPassword ? (
                <Icon
                  style={styles.iconShow}
                  name="eye-off"
                  size={20}
                  onPress={handleShowPassword}
                />
              ) : (
                <Icon
                  style={styles.iconShow}
                  name="eye"
                  size={20}
                  onPress={handleShowPassword}
                />
              )}
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
  },
  wrapper: {
    position: "relative",

    width: "100%",
    height: 549,

    paddingTop: 92,
    paddingHorizontal: 16,

    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  input: {
    height: 50,

    padding: 16,

    backgroundColor: "#F6F6F6",

    fontSize: 16,
    lineHeight: 19,

    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },
  form: {},
  title: {
    color: "#212121",

    fontWeight: "Medium",
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01 * 30,

    textAlign: "center",
    marginBottom: 33,
  },
  iconShow: {
    position: "absolute",
    top: 26,
    right: 16,

    fontSize: 16,
    lineHeight: 19,

    color: "#1B4371",

    transform: [{ translateY: -25 / 2 }],
  },
});
