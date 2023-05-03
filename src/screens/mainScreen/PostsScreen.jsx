import { StyleSheet, Text, View } from "react-native";
import PostsList from "../../components/PostsList/PostsList";

export default function PostsScreen({ route }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        {/* <Image source={} /> */}
        <View style={styles.userPhoto}></View>
        <View>
          <Text style={styles.userName}>login</Text>
          <Text style={styles.userEmail}>email</Text>
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
