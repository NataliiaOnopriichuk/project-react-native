import { StyleSheet, Text } from "react-native";
import UserAvatar from "../../components/UserAvatar/UserAvatar";
import LogOut from "../../components/LogOut/LogOut";
import { useState } from "react";
// import PostsList from "../../components/PostsList/PostsList";

export default function ProfileScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  return (
    <UserAvatar
      isShowKeyboard={isShowKeyboard}
      setIsShowKeyboard={setIsShowKeyboard}
      type="profile"
    >
      <LogOut type="profile" />
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
});
