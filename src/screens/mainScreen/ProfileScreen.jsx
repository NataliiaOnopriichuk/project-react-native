import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import UserAvatar from "../../components/UserAvatar/UserAvatar";
import Icon from "react-native-vector-icons/Feather";
import LogOut from "../../components/LogOut/LogOut";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function ProfileScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const navigation = useNavigation();
  return (
    <UserAvatar
      isShowKeyboard={isShowKeyboard}
      setIsShowKeyboard={setIsShowKeyboard}
      type="profile"
    >
      <LogOut type="profile" />
      <Text style={styles.title}>Natali Romanova</Text>
      <View style={styles.imageContainer}>
        <View
          style={{ height: 240, borderRadius: 8, backgroundColor: "#BDBDBD" }}
        ></View>

        <Text style={styles.subTitle}>Forest</Text>
        <View style={styles.wrapper}>
          <View style={styles.inner}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Comments")}
              style={styles.comments}
            >
              <Icon name="message-circle" color="#BDBDBD" size={24} />
              <Text style={styles.text}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.likes}>
              <Icon name="thumbs-up" color="#BDBDBD" size={24} />
              <Text style={styles.text}>0</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Map")}
            style={styles.map}
          >
            <Icon name="map-pin" color="#BDBDBD" size={24} />
            <Text style={styles.textMap}>Location</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  imageContainer: {
    marginBottom: 32,
  },
  subTitle: {
    marginTop: 8,
    marginBottom: 11,
    fontSize: 16,
    fontFamily: "Roboto-Medium",
    fontWeight: "500",
    lineHeight: 19,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inner: {
    flexDirection: "row",
    alignItems: "center",
  },
  comments: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 24,
  },
  text: {
    marginLeft: 6,
    color: "#BDBDBD",
  },
  likes: {
    flexDirection: "row",
    alignItems: "center",
  },
  map: {
    flexDirection: "row",
    alignItems: "center",
  },
  textMap: {
    marginLeft: 3,
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
