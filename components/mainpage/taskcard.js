import React from "react";
import { Body, CardItem, Card, Text } from "native-base";
import { StyleSheet, TouchableNativeFeedback } from "react-native";

const TaskCard = (props) => {
  return (
    <TouchableNativeFeedback
      onPress={() => console.log(props.task.id)}
      onLongPress={() => setedit(!edit)}
    >
      <Card style={styles.card}>
        <CardItem style={styles.carditem}>
          <Body>
            <Text style={styles.text} numberOfLines={3}>
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
    backgroundColor: "#ccf",
    borderRadius: 10,
    overflow: "hidden",
  },
  carditem: {
    backgroundColor: "#ccf",
  },
  text: {
    fontSize: 22,
    textAlign: "center",
  },
  footer: {
    backgroundColor: "#ccc",
    height: 12,
    justifyContent: "flex-end",
  },
  datetext: {
    fontSize: 12,
  },
  edit: {
    height: 30,
    backgroundColor: "blue",
  },
  edititem: {
    flex: 0.5,
    justifyContent: "center",
  },
});

export default TaskCard;
