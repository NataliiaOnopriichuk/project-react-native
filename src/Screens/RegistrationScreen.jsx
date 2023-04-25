import { useState } from "react";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const BGImage = require("../assets/images/PhotoBG.jpg");

export default function RegistrationScreen() {
  const [showPassword, setShowPassword] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <ImageBackground source={BGImage} style={styles.image}>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <View style={styles.container}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "margin"}
          >
            <View
              style={{
                ...styles.form,
                paddingBottom: isShowKeyboard ? 16 : 78,
              }}
            >
              <Text style={styles.title}>Registration</Text>
              <TextInput
                style={{ ...styles.input, marginBottom: 16 }}
                placeholder="Login"
                placeholderTextColor={"#BDBDBD"}
                onSubmitEditing={keyboardHide}
                onFocus={() => setIsShowKeyboard(true)}
              />
              <TextInput
                style={{ ...styles.input, marginBottom: 16 }}
                placeholder="Email"
                placeholderTextColor={"#BDBDBD"}
                onSubmitEditing={keyboardHide}
                onFocus={() => setIsShowKeyboard(true)}
              />
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor={"#BDBDBD"}
                  secureTextEntry={showPassword}
                  onSubmitEditing={keyboardHide}
                  onFocus={() => setIsShowKeyboard(true)}
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
              {!isShowKeyboard && (
                <>
                  <TouchableOpacity
                    style={styles.buttonReg}
                    activeOpacity={0.7}
                    onPress={handleSubmit}
                  >
                    <Text style={styles.textReg}>Sign Up</Text>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.7}>
                    <Text style={styles.regNav}>
                      Already have an account? Log in
                    </Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
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
    width: "100%",
  },
  form: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
    paddingTop: 92,
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

  title: {
    color: "#212121",

    // fontWeight: "Medium",
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
  buttonReg: {
    justifyContent: "center",

    height: 51,

    backgroundColor: "#FF6C00",
    borderRadius: 100,

    marginTop: 27,
  },
  textReg: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",

    color: "#FFFFFF",
  },
  regNav: {
    marginTop: 16,

    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",

    color: "#1B4371",
  },
});
