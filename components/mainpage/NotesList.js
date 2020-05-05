import React, { useState } from "react";
import { List } from "native-base";
import { FlatList, StyleSheet } from "react-native";

import NoteCard from "./notecard";
import TaskCard from "./taskcard";

const splitlist = (list) => {
  const left_col = [];
  const right_col = [];
  list.map((item, index) => {
    if (index % 2 === 0) {
      if (item.type === "notes") {
        left_col.push(<NoteCard task={item} />);
      } else {
        left_col.push(<TaskCard task={item} />);
      }
    } else {
      if (item.type === "notes") {
        right_col.push(<NoteCard task={item} />);
      } else {
        right_col.push(<TaskCard task={item} />);
      }
    }
  });
  return [left_col, right_col];
};

const NotesList = (props) => {
  const [leftcol, rightcol] = splitlist(props.tasks);
  return (
    <FlatList
      style={styles.flatlist}
      numColumns={2}
      data={[
        { key: "1", list: leftcol },
        { key: "2", list: rightcol },
      ]}
      renderItem={({ item }) => <List style={styles.list}>{item.list}</List>}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  flatlist: {
    width: "100%",
    flex: 1,
    padding: 10,
    paddingBottom: 15,
  },
  list: {
    width: "50%",
    padding: 5,
  },
});

export default NotesList;
