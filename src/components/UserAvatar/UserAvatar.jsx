import React from "react";
import { View, Image, StyleSheet } from "react-native";

const UserAvatar = () => {
  return <View style={styles.imageWrapper}></View>;
};

export default UserAvatar;

const styles = StyleSheet.create({
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
