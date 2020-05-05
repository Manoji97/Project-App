import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { CardItem, Button, Icon, Body, Item, Input } from "native-base";

const AttachmentCard = (props) => {
  const [addtextbox, setaddtextbox] = useState(false);
  const [enteredtext, setenteredtext] = useState("");
  const textbox = (
    <Item>
      <Icon active name="home" />
      <Input
        placeholder="Icon Textbox"
        value={enteredtext}
        multiline={true}
        onChangeText={(message) => setenteredtext(message)}
      />
      <Button transparent onPress={() => setaddtextbox(false)}>
        <Icon active name="add" />
      </Button>
      <Button transparent onPress={() => setaddtextbox(false)}>
        <Icon active name="remove" />
      </Button>
    </Item>
  );
  return (
    <CardItem>
      <Body style={{ alignItems: "center" }}>
        {addtextbox ? textbox : null}
        <Button style={styles.addbutton} onPress={() => setaddtextbox(true)}>
          <Icon name="add"></Icon>
        </Button>
      </Body>
    </CardItem>
  );
};

const styles = StyleSheet.create({
  addbutton: {
    borderRadius: 25,
    marginTop: 20,
  },
});

export default AttachmentCard;
