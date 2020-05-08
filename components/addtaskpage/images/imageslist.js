import React, { useState } from "react";
import { View, Text, H2, Button, Icon } from "native-base";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import ImageCard from "./image";

const Images = (props) => {
  return (
    <View style={styles.view}>
      <H2>Images</H2>
      <View style={styles.addbutton}>
        <Button bordered>
          <Icon name="ios-add" />
        </Button>
      </View>
      <Text style={styles.addtext}>Add Pic</Text>
      <FlatList
        numColumns={3}
        style={styles.FlatList}
        data={props.imagelinks}
        renderItem={(item) => <ImageCard imagelink={item.item} />}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
  },
  FlatList: {
    flex: 1,
    width: "100%",
  },
  addbutton: {
    margin: 15,
    marginBottom: 5,
  },
  addtext: {
    fontSize: 14,
    color: "grey",
    marginBottom: 15,
  },
});

export default Images;
