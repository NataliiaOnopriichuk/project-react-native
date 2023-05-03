import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

export default function PostsList({ route, type }) {
  const [posts, setPosts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    if (route.params) setPosts((prev) => [...prev, route.params]);
  }, [route.params]);

  return (
    <FlatList
      data={posts ?? []}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: item.photoUrl }}
            style={{ height: 240, borderRadius: 8 }}
          />

          <Text style={styles.subTitle}>{item.title}</Text>
          <View style={styles.wrapper}>
            <View style={styles.inner}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Comments", {
                    photo: item.photoUrl,
                  })
                }
                style={styles.comments}
              >
                <Icon name="message-circle" color="#BDBDBD" size={24} />
                <Text style={styles.text}>0</Text>
              </TouchableOpacity>
              {type === "ProfileScreen" && (
                <TouchableOpacity style={styles.likes}>
                  <Icon name="thumbs-up" color="#BDBDBD" size={24} />
                  <Text style={styles.text}>0</Text>
                </TouchableOpacity>
              )}
            </View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Map", { location: item.location })
              }
              style={styles.map}
            >
              <Icon name="map-pin" color="#BDBDBD" size={24} />
              <Text style={styles.textMap}>locationName</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
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
