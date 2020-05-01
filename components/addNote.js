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
          <Icon name="logo-whatsapp" />
        </Button>
        <Button style={{ backgroundColor: "#3B5998" }}>
          <Icon name="logo-facebook" />
        </Button>
      </Fab>
    </View>
  );
};

export default AddNote;
