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
import { FontAwesome } from "@expo/vector-icons";

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
          <FontAwesome
            size={20}
            color={"green"}
            style={styles.icons}
            active
            name="check-circle"
          />
        </Button>
        <Button transparent onPress={() => props.closetextarea()}>
          <FontAwesome
            size={20}
            color={"red"}
            style={styles.icons}
            active
            name="times-circle"
          />
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
