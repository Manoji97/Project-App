import React, { useState } from "react";
import { Body, CardItem, Card, Text } from "native-base";
import { StyleSheet, Image, TouchableNativeFeedback } from "react-native";

const NoteCard = (props) => {
  const imageitem =
    props.task.imagelink !== "" ? (
      <CardItem cardBody>
        <Image source={{ uri: props.task.imagelink }} style={styles.image} />
      </CardItem>
    ) : null;

  return (
    <TouchableNativeFeedback onPress={() => console.log(props.task.id)}>
      <Card style={styles.card}>
        {imageitem}
        <CardItem style={styles.carditem}>
          <Body>
            <Text numberOfLines={7} ellipsizeMode="tail">
              {props.task.text}
            </Text>
          </Body>
        </CardItem>
        <CardItem footer style={styles.footer}>
          <Text style={styles.datetext}>
            {props.task.datecreated.toLocaleDateString("en-US")}
          </Text>
        </CardItem>
      </Card>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    backgroundColor: "#fcf",
    overflow: "hidden",
  },
  carditem: {
    backgroundColor: "#fcf",
  },
  datetext: {
    fontSize: 12,
  },
  image: {
    height: 100,
    width: null,
    flex: 1,
    resizeMode: "cover",
  },
  footer: {
    height: 12,
    backgroundColor: "#fcc",
    justifyContent: "flex-end",
  },
});

export default NoteCard;
