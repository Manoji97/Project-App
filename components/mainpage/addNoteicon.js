import React, { Component } from "react";
import { View, Button, Icon, Fab } from "native-base";
import { FontAwesome5, Foundation } from "@expo/vector-icons";

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
        <Button
          style={{ backgroundColor: "#34A34F" }}
          onPress={() => {
            props.navigation.navigate("AddNoteScreen");
          }}
        >
          <Foundation size={15} color="white" name="clipboard-notes" />
        </Button>
        <Button
          style={{ backgroundColor: "#34A34F" }}
          onPress={() => {
            props.navigation.navigate("AddTaskScreen", { name: "AddTask" });
          }}
        >
          <FontAwesome5 size={15} color="white" name="tasks" />
        </Button>
      </Fab>
    </View>
  );
};

export default AddNote;
