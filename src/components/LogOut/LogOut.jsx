import React from "react";
import { StyleSheet } from "react-native";
import LogOutIcon from "react-native-vector-icons/Feather";

export default function LogOut({ type }) {
  return (
    <LogOutIcon
      name="log-out"
      color="#BDBDBD"
      size={24}
      style={type === "profile" ? styles.logOut : null}
    />
  );
}

const styles = StyleSheet.create({
  logOut: {
    position: "absolute",
    top: 22,
    right: 16,
  },
});
