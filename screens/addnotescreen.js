import React, { useState } from "react";
import {
  Textarea,
  Container,
  Footer,
  FooterTab,
  Button,
  Text,
} from "native-base";
import { StyleSheet } from "react-native";

const AddNoteScreen = (props) => {
  const [note, setnote] = useState("");
  return (
    <Container>
      <Textarea
        style={styles.textarea}
        rowSpan={10}
        bordered
        placeholder={"Add Note"}
        onChangeText={(message) => setnote(message)}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  textarea: {
    backgroundColor: "#ccc",
    padding: 15,
    fontSize: 22,
    flex: 1,
    margin: 10,
  },
});

export default AddNoteScreen;
