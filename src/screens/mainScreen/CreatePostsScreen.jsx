import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import MapIcon from "react-native-vector-icons/EvilIcons";
import Icon from "react-native-vector-icons/FontAwesome";

const initialState = {
  title: "",
  location: "",
};

const initialStateBorder = {
  title: "#E8E8E8",
  location: "#E8E8E8",
};

export default function CreatePostsScreen() {
  const [state, setState] = useState(initialState);
  const [_, setIsShowKeyboard] = useState(false);
  const [BorderInputColor, setBorderInputColor] = useState(initialStateBorder);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleFocus = (name) => {
    setIsShowKeyboard(true),
      setBorderInputColor((prev) => ({
        ...prev,
        [name]: "#FF6C00",
      }));
  };

  const handleSubmit = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log("state :>> ", state);
    setState(initialState);
  };

  const resetForm = () => {
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.cameraWrapper}>
            <View style={styles.cameraIcon}>
              <Icon name="camera" color="#BDBDBD" size={24} />
            </View>
          </View>
          <Text style={styles.loadPhotoText}>Load photo</Text>

          <TextInput
            placeholder="Title..."
            placeholderTextColor={"#BDBDBD"}
            style={{
              ...styles.input,
              borderBottomColor: BorderInputColor.title,
            }}
            value={state.title}
            onFocus={() => {
              handleFocus("title");
            }}
            onBlur={() => setBorderInputColor(initialStateBorder)}
            onChangeText={(value) =>
              setState((prevState) => ({ ...prevState, title: value }))
            }
          />
          <View styles={{ position: "relative" }}>
            <MapIcon
              name="location"
              color="#BDBDBD"
              size={28}
              style={styles.iconMap}
            />
            <TextInput
              placeholder="Location..."
              placeholderTextColor={"#BDBDBD"}
              style={{
                ...styles.input,
                borderBottomColor: BorderInputColor.location,
                paddingLeft: 28,
              }}
              value={state.location}
              onFocus={() => {
                handleFocus("location");
              }}
              onBlur={() => setBorderInputColor(initialStateBorder)}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, location: value }))
              }
            />
          </View>
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: "#F6F6F6",
            }}
            onPress={handleSubmit}
          >
            <Text style={{ ...styles.btnText, color: "#BDBDBD" }}>Publish</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-end",
            paddingBottom: 34,
            paddingTop: 9,
          }}
        >
          <TouchableOpacity style={styles.btnTrash} onPress={resetForm}>
            <Icon
              name="trash-o"
              color="#DADADA"
              size={24}
              style={styles.trashIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
  },
  cameraWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 240,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  cameraIcon: {
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  cameraBtn: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#fff",
    width: 60,
    height: 60,
  },
  loadPhotoText: {
    marginTop: 8,
    color: "#BDBDBD",
    fontSize: 16,
    marginBottom: 32,
  },
  openCamera: {
    height: 240,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 8,
  },
  takePhoto: {
    position: "absolute",
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
    height: 50,
    fontSize: 16,
    paddingTop: 16,
    paddingBottom: 15,
    marginBottom: 16,
  },
  iconMap: {
    position: "absolute",
    bottom: 31,
    left: 0,
  },
  button: {
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    height: 51,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    marginTop: 32,
  },
  btnText: {
    color: "#BDBDBD",
    fontSize: 16,
  },
  btnTrash: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    width: 70,
    height: 40,
  },
});
