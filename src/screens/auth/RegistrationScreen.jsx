import { useState } from "react";
import { Keyboard, StyleSheet, TouchableOpacity } from "react-native";
import { Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import UserAvatar from "../../components/UserAvatar/UserAvatar";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { authRegister } from "../../redux/auth/authOperation";

const initialState = {
  login: "",
  email: "",
  password: "",
};

const initialStateBorder = {
  login: "#E8E8E8",
  email: "#E8E8E8",
  password: "#E8E8E8",
};

export default function RegistrationScreen() {
  const [showPassword, setShowPassword] = useState(true);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [avatar, setAvatar] = useState(null);
  const [BorderInputColor, setBorderInputColor] = useState(initialStateBorder);
  const navigation = useNavigation();

  const handleShowPassword = () => setShowPassword(!showPassword);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    dispatch(authRegister({ ...state, avatar }));
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
    <UserAvatar
      isShowKeyboard={isShowKeyboard}
      setIsShowKeyboard={setIsShowKeyboard}
      avatar={avatar}
      setAvatar={setAvatar}
      type="RegistrationScreen"
    >
      <Text style={styles.title}>Registration</Text>
      <TextInput
        style={{
          ...styles.input,
          marginBottom: 16,
          borderColor: BorderInputColor.login,
        }}
        placeholder="Login"
        value={state.login}
        placeholderTextColor={"#BDBDBD"}
        onSubmitEditing={handleSubmit}
        onFocus={() => {
          handleFocus("login");
        }}
        onBlur={() => setBorderInputColor(initialStateBorder)}
        onChangeText={(value) =>
          setState((prevState) => ({ ...prevState, login: value }))
        }
      />
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
            setState((prevState) => ({
              ...prevState,
              password: value,
            }))
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
            <Text style={styles.textReg}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.regNav}>
              Already have an account?{" "}
              <Text style={{ ...styles.regNav, color: "#FF6C00" }}>Log in</Text>
            </Text>
          </TouchableOpacity>
        </>
      )}
    </UserAvatar>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,

    padding: 16,

    backgroundColor: "#F6F6F6",

    fontSize: 16,
    fontFamily: "Roboto-Regular",
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
