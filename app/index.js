import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

// TODO
//+ RESTART HERE
//? FIND WEATHER API KEY

export default function Home() {
  return (
    <View style={styles.image}>
      <Image
        source={require("../assets/images/cloud-bg.png")}
        style={{ display: "flex", flex: 1 }}
        resizeMode="cover"
        blurRadius={9}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});
