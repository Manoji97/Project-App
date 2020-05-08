import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Item, View, Button, Textarea } from "native-base";

const TaskTitle = (props) => {
  const [enteredtext, set_enteredtext] = useState(props.text);
  const [isedit, set_isedit] = useState(false);
  return (
    <View style={{ ...styles.item, borderColor: isedit ? "green" : "#ccc" }}>
      <Item>
        <Textarea
          disabled={!isedit}
          style={styles.text}
          placeholder="Title"
          rowSpan={2}
          numberOfLines={3}
          maxLength={50}
          onChangeText={(text) => set_enteredtext(text)}
          value={enteredtext}
        />
        <Button
          transparent
          onPress={() => {
            set_isedit(!isedit);
            if (isedit) {
              props.settext(enteredtext);
            }
          }}
        >
          <Feather
            name={isedit ? "check" : "edit"}
            color={isedit ? "green" : "grey"}
            size={18}
          />
        </Button>
      </Item>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    flex: 0.97,
    margin: 10,
  },
});

export default TaskTitle;
