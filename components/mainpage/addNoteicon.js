import React, { Component } from "react";
import { View, Button, Icon, Fab } from "native-base";

const AddNote = (props) => {
  return (
    <View>
      <Fab
        active={props.active}
        direction="up"
        containerStyle={{}}
        style={{ backgroundColor: "#5067FF" }}
        position="bottomRight"
        onPress={() => props.toggle()}
      >
        <Icon name="add" />
        <Button style={{ backgroundColor: "#34A34F" }}>
          {/*on press should move to add note page*/}
          <Icon name="logo-whatsapp" />
        </Button>
        <Button
          style={{ backgroundColor: "#3B5998" }}
          onPress={() => {
            props.settextarea();
          }}
        >
          {/*on press should open a textbox no top to write tk title*/}
          <Icon name="logo-facebook" />
        </Button>
      </Fab>
    </View>
  );
};

export default AddNote;
