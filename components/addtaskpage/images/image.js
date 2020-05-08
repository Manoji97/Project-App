import React, { useState } from "react";
import { View } from "native-base";
import { StyleSheet, Dimensions, Image } from "react-native";

const ImageCard = (props) => {
  return (
    <View style={styles.view}>
      <Image style={styles.image} source={{ uri: props.imagelink }} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 0.8,
  },
  image: {
    backgroundColor: "#cff",
    width: Dimensions.get("window").width / 3,
    height: Dimensions.get("window").width / 3,
  },
});

export default ImageCard;
