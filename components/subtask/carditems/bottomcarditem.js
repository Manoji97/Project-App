import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { CardItem, Text, Left, Right } from "native-base";

const BottomCardItem = (props) => {
  return (
    <CardItem style={styles.bottomcarditem}>
      <Left>
        <Text style={{ color: "blue" }}>12th day</Text>
      </Left>
      <Right>
        <Text style={{ color: "blue" }}>11h ago</Text>
      </Right>
    </CardItem>
  );
};

const styles = StyleSheet.create({
  bottomcarditem: {
    backgroundColor: "#ccc",
  },
});

export default BottomCardItem;
