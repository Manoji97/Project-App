import React, { useState } from "react";
import { List } from "native-base";
import { FlatList, StyleSheet } from "react-native";

import SubtaskCard from "./subtaskcard";
import Subtaskcard from "./subtaskcard";

const subtask = {
  id: "1",
  text: "manoji us best  sdbf bhvhab jjkf",
  imagelink: "",
  created_on: new Date(),
  progress: 80,
  is_favourite: true,
  progress_detail: 1,
};

const SubtaskList = (props) => {
  return (
    <FlatList
      style={styles.flatlist}
      data={[{ id: subtask.id, task: subtask }]}
      renderItem={({ item }) => <Subtaskcard task={subtask} />}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  flatlist: {
    padding: 40,
  },
});

export default SubtaskList;
