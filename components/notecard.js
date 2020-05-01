import React, { useState } from "react";
import { Body, CardItem, Card, Text } from "native-base";
import { StyleSheet } from "react-native";

const NoteCard = (props) => {
  return (
    <Card style={styles.card}>
      <CardItem style={styles.carditem}>
        <Body>
          <Text numberOfLines={10} ellipsizeMode="tail">
            {props.note.text}
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
  },
  carditem: {
    borderRadius: 8,
    backgroundColor: "#fcc",
  },
  datetext: {
    fontSize: 12,
  },
});

export default NoteCard;
