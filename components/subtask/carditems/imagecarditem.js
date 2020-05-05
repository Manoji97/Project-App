import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import { CardItem } from "native-base";

const ImageCarditem = (props) => {
  return (
    <CardItem cardBody>
      <Image source={{ uri: "Image URL" }} style={styles.image} />
    </CardItem>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: null,
    flex: 1,
  },
});

export default ImageCarditem;
