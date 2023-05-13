import { Image, StyleSheet, Text, View } from "react-native";
import PostsList from "../../components/PostsList/PostsList";
import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth/authSelectors";

export default function PostsScreen({ route }) {
  const { userName, userAvatar, userEmail } = useSelector(
    authSelectors.getUser
  );

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Image source={{ uri: userAvatar }} style={styles.userPhoto} />
        {/* <View style={styles.userPhoto}></View> */}
        <View>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.userEmail}>{userEmail}</Text>
        </View>
      </View>
      <PostsList route={route} type="PostsScreen" />
    </View>
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
  containerHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  userPhoto: {
    width: 60,
    height: 60,

    marginRight: 8,

    borderRadius: 16,
    backgroundColor: "#E8E8E8",
  },
  userName: {
    fontWeight: "700",
    fontSize: 13,
    lineHeight: 15,

    color: "#212121",
  },
  userEmail: {
    fontWeight: "400",
    fontSize: 11,
    lineHeight: 13,

    color: "#212121",
  },
});
