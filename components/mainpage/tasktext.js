import React, { useState } from "react";
import {
  Body,
  CardItem,
  Form,
  Textarea,
  Button,
  Left,
  Right,
  Icon,
} from "native-base";
import { StyleSheet } from "react-native";

const TaskTextArea = (props) => {
  const [exteredtext, settext] = useState("");
  return (
    <CardItem>
      <Left>
        <Body>
          <Form>
            <Textarea
              style={styles.textarea}
              rowSpan={4}
              bordered
              placeholder="Textarea"
              maxLength={60}
              value={exteredtext}
              onChangeText={(msg) => {
                settext(msg);
              }}
            />
          </Form>
        </Body>
      </Left>
      <Right style={styles.buttonpanel}>
        <Button transparent onPress={() => props.addtasktotasks(exteredtext)}>
          <Icon style={styles.icons} active name="camera" />
        </Button>
        <Button transparent onPress={() => props.closetextarea()}>
          <Icon style={styles.icons} active name="alarm" />
        </Button>
      </Right>
    </CardItem>
  );
};

const styles = StyleSheet.create({
  buttonpanel: {
    flex: 0.1,
  },
  icons: {
    padding: 5,
  },
  textarea: {
    width: "100%",
    padding: 25,
    borderRadius: 20,
    fontSize: 20,
    backgroundColor: "#fcf",
    textAlign: "center",
  },
});

export default TaskTextArea;
