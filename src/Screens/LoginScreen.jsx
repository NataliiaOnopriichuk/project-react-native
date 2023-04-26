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

const initialState = {
  email: "",
  password: "",
};

const initialStateBorder = {
  email: "#E8E8E8",
  password: "#E8E8E8",
};

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [BorderInputColor, setBorderInputColor] = useState(initialStateBorder);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log("state :>> ", state);
    setState(initialState);
  };

  const handleFocus = (name) => {
    setIsShowKeyboard(true),
      setBorderInputColor((prev) => ({
        ...prev,
        [name]: "#FF6C00",
      }));
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
                paddingBottom: isShowKeyboard ? 16 : 144,
              }}
            >
              <Text style={styles.title}>Log in</Text>
              <TextInput
                style={{
                  ...styles.input,
                  marginBottom: 16,
                  borderColor: BorderInputColor.email,
                }}
                placeholder="Email"
                value={state.email}
                placeholderTextColor={"#BDBDBD"}
                onSubmitEditing={handleSubmit}
                onFocus={() => {
                  handleFocus("email");
                }}
                onBlur={() => setBorderInputColor(initialStateBorder)}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
              />
              <View>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: BorderInputColor.password,
                  }}
                  placeholder="Password"
                  value={state.password}
                  placeholderTextColor={"#BDBDBD"}
                  secureTextEntry={showPassword}
                  onSubmitEditing={handleSubmit}
                  onFocus={() => {
                    handleFocus("password");
                  }}
                  onBlur={() => setBorderInputColor(initialStateBorder)}
                  onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, password: value }))
                  }
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
                    <Text style={styles.textReg}>Log in</Text>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.7}>
                    <Text style={styles.regNav}>
                      Don't have an account? Sign up here!
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
    paddingTop: 32,
  },

  input: {
    height: 50,

    padding: 16,

    backgroundColor: "#F6F6F6",

    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,

    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 8,
  },

  title: {
    color: "#212121",

    fontFamily: "Roboto-Medium",
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
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",

    color: "#FFFFFF",
  },
  regNav: {
    marginTop: 16,

    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",

    color: "#1B4371",
  },
});
