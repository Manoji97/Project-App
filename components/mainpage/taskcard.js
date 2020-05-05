import React from "react";
import { Body, CardItem, Card, Text } from "native-base";
import { StyleSheet } from "react-native";

const TaskCard = (props) => {
  return (
    <Card style={styles.card}>
      <CardItem style={styles.carditem}>
        <Body>
          <Text numberOfLines={3} ellipsizeMode="tail" style={styles.text}>
            {props.task.text}
          </Text>
        </Body>
      </CardItem>
      <CardItem footer style={styles.footer}>
        <Text style={styles.datetext}>GeekyAnts</Text>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ccc",
    borderRadius: 10,
    overflow: "hidden",
  },
  carditem: {
    backgroundColor: "#ccc",
  },
  text: {
    fontSize: 22,
    textAlign: "center",
  },
  footer: { backgroundColor: "#ccf", height: 15 },
  datetext: {
    fontSize: 12,
  },
});

export default TaskCard;
