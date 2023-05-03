import {
  Image,
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
import React, { useEffect, useState } from "react";
import MapIcon from "react-native-vector-icons/EvilIcons";
import Icon from "react-native-vector-icons/FontAwesome";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

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
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [BorderInputColor, setBorderInputColor] = useState(initialStateBorder);
  const navigation = useNavigation();

  //Camera
  const [cameraIsOpen, setCameraIsOpen] = useState(false);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [, setHasPermission] = useState(null);

  // Location
  const [location, setLocation] = useState(null);

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

  const resetForm = () => {
    setState(initialState);
    setPhoto(null);
  };

  const onCameraToggle = () => {
    setCameraIsOpen(!cameraIsOpen);
  };

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
  };

  useEffect(() => {
    (async () => {
      try {
        const resCamera = await Camera.requestCameraPermissionsAsync();
        const resMedia = await MediaLibrary.requestPermissionsAsync();
        const resLocation = await Location.requestForegroundPermissionsAsync();

        const statusCamera = resCamera.status;
        const statusMedia = resMedia.status;
        const statusLocation = resLocation.status;

        setHasPermission(
          statusCamera === "granted" &&
            statusMedia === "granted" &&
            statusLocation === "granted"
        );

        const location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [cameraIsOpen]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setPhoto(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    navigation.navigate("Posts", {
      photoUrl: photo,
      ...state,
      location: location?.coords,
    });
    resetForm();
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          {!cameraIsOpen ? (
            <>
              <View style={styles.cameraWrapper}>
                {photo && (
                  <View style={styles.takePhoto}>
                    <Image
                      source={{ uri: photo }}
                      style={{ width: 343, height: 240, borderRadius: 8 }}
                    />
                  </View>
                )}
                <TouchableOpacity
                  style={{
                    ...styles.cameraIcon,
                    backgroundColor: "#fff",
                  }}
                  onPress={onCameraToggle}
                >
                  <Icon name="camera" color="#BDBDBD" size={24} />
                </TouchableOpacity>
              </View>
              {photo ? (
                <Text
                  style={{
                    ...styles.loadPhotoText,
                    display: isShowKeyboard ? "none" : "flex",
                  }}
                  onPress={pickImage}
                >
                  Edit photo
                </Text>
              ) : (
                <Text style={styles.loadPhotoText} onPress={pickImage}>
                  Load photo
                </Text>
              )}
            </>
          ) : (
            <>
              <Camera style={styles.openCamera} ref={setCamera}>
                {photo && (
                  <View style={styles.takePhoto}>
                    <Image
                      source={{ uri: photo }}
                      style={{ width: 343, height: 240, borderRadius: 8 }}
                    />
                  </View>
                )}
                <TouchableOpacity
                  style={{
                    ...styles.cameraIcon,
                    backgroundColor: "rgba(255, 255, 255, 0.3)",
                  }}
                  onPress={takePhoto}
                >
                  <Icon name="camera" color="#FFFFFF" size={24} />
                </TouchableOpacity>
              </Camera>
              {photo ? (
                <Text
                  style={{
                    ...styles.loadPhotoText,
                    display: isShowKeyboard ? "none" : "flex",
                  }}
                  onPress={pickImage}
                >
                  Edit photo
                </Text>
              ) : (
                <Text style={styles.loadPhotoText} onPress={pickImage}>
                  Load photo
                </Text>
              )}
            </>
          )}

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
              backgroundColor: photo ? "#FF6C00" : "#F6F6F6",
            }}
            onPress={handleSubmit}
          >
            <Text
              style={{ ...styles.btnText, color: photo ? "#FFF" : "#BDBDBD" }}
            >
              Publish
            </Text>
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
  openCamera: {
    height: 240,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 8,
  },
  cameraIcon: {
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
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
  loadPhotoText: {
    marginTop: 8,
    color: "#BDBDBD",
    fontSize: 16,
    marginBottom: 32,
  },
});
