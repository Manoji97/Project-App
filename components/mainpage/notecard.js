import React, { useState } from "react";
import { Body, CardItem, Card, Text } from "native-base";
import { StyleSheet, Image } from "react-native";

const NoteCard = (props) => {
  const imageitem =
    props.task.imagelink !== "" ? (
      <CardItem cardBody>
        <Image source={{ uri: props.task.imagelink }} style={styles.image} />
      </CardItem>
    ) : null;

  return (
    <Card style={styles.card}>
      {imageitem}
      <CardItem style={styles.carditem}>
        <Body>
          <Text numberOfLines={7} ellipsizeMode="tail">
            {props.task.text}
          </Text>
        </Body>
      </CardItem>
      <CardItem footer style={styles.carditem}>
        <Text style={styles.datetext}>GeekyAnts</Text>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    backgroundColor: "#fcc",
    overflow: "hidden",
  },
  carditem: {
    borderRadius: 8,
    backgroundColor: "#fcc",
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
});

export default NoteCard;
