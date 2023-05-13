import { StyleSheet, Text } from "react-native";
import UserAvatar from "../../components/UserAvatar/UserAvatar";
import LogOut from "../../components/LogOut/LogOut";
import { useState } from "react";
import { authLogout } from "../../redux/auth/authOperation";
import { useDispatch } from "react-redux";
import { TouchableOpacity } from "react-native";
// import PostsList from "../../components/PostsList/PostsList";

export default function ProfileScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const dispatch = useDispatch();
  return (
    <UserAvatar
      isShowKeyboard={isShowKeyboard}
      setIsShowKeyboard={setIsShowKeyboard}
      type="profile"
    >
      <TouchableOpacity
        style={styles.logOut}
        onPress={() => dispatch(authLogout())}
      >
        <LogOut />
      </TouchableOpacity>
      <Text style={styles.title}>Natali Romanova</Text>
      {/* <PostsList type="ProfileScreen" /> */}
    </UserAvatar>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    textAlign: "center",
    lineHeight: 35,
    letterSpacing: 0.01,
    marginBottom: 32,
  },
  logOut: {
    position: "absolute",
    top: 22,
    right: 16,
  },
});
