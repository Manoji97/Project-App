import React, { useState } from "react";
import { StyleSheet, TouchableNativeFeedback } from "react-native";
import { Feather } from "@expo/vector-icons";
import { View, Button, Textarea } from "native-base";

const Description = (props) => {
  const [isedit, set_isedit] = useState(false);
  const [enteredtext, set_enteredtext] = useState(props.text);

  return (
    <TouchableNativeFeedback onPress={() => props.settoggle()}>
      <View
        style={{
          ...styles.view,
          flex: !props.isopen ? 0.2 : 10,
          borderColor: isedit ? "blue" : "#ccc",
          elevation: isedit ? 3 : 1,
        }}
      >
        <Textarea
          disabled={!isedit}
          style={styles.textarea}
          placeholder="Write your Description here"
          onChangeText={(title) => set_enteredtext(title)}
          value={enteredtext}
        />
        <Button
          transparent
          style={styles.button}
          onPress={() => {
            set_isedit(!isedit);
            if (!isedit) {
              props.settoggle();
            }
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
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 10,
    padding: 5,
    borderRadius: 6,
    borderWidth: 1,
  },
  textarea: {
    flex: 1,
    padding: 5,
    fontSize: 16,
    lineHeight: 28,
    textAlign: "center",
  },
  button: {
    position: "absolute",
    bottom: 5,
    right: 15,
  },
});

export default Description;
