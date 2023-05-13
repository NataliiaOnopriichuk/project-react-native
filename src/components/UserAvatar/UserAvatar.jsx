import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { View } from "react-native";
import { BgnImage } from "../../components/BgnImage/BgnImage";
import Icon from "react-native-vector-icons/AntDesign";
import * as ImagePicker from "expo-image-picker";

export const UserAvatar = ({
  children,
  isShowKeyboard,
  setIsShowKeyboard,
  type,
  avatar,
  setAvatar,
}) => {
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const addAvatar = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  const deleteAvatar = () => {
    setAvatar(null);
  };

  return (
    <BgnImage>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <View style={styles.container}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "margin"}
          >
            <View
              style={{
                ...styles.form,
                paddingBottom:
                  type !== "profile" ? (isShowKeyboard ? 16 : 144) : 43,
              }}
            >
              <View style={styles.imageWrapper}>
                {avatar && (
                  <Image
                    source={{ uri: avatar }}
                    style={{ width: "100%", height: "100%", borderRadius: 16 }}
                  />
                )}
                <TouchableOpacity
                  style={styles.addIcon}
                  onPress={avatar ? deleteAvatar : addAvatar}
                >
                  {!avatar && (
                    <Icon name="pluscircleo" color="#FF6C00" size={25} />
                  )}
                  {avatar && (
                    <Icon name="closecircleo" color="#E8E8E8" size={25} />
                  )}
                </TouchableOpacity>
              </View>
              {children}
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </BgnImage>
  );
};

export default UserAvatar;

const styles = StyleSheet.create({
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
  addIcon: {
    width: 25,
    height: 25,
    position: "absolute",
    bottom: 14,
    right: 0,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    transform: [{ translateX: 12 }],
  },
  imageWrapper: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -50 }],

    width: 120,
    height: 120,

    backgroundColor: "#F6F6F6",
    borderRadius: 16,

    zIndex: 1000,
  },
});
