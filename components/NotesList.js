import React, { useState } from "react";
import { List } from "native-base";
import { FlatList, StyleSheet } from "react-native";

import NoteCard from "./notecard";

const tempdata = [
  { id: "1", text: "manoji is best" },
  { id: "2", text: "manoji is wsgf g" },
  { id: "3", text: "manoji is beabgsgst" },
  { id: "4", text: "manoji is abtrw " },
  { id: "5", text: "manoji is beavgsst" },
  { id: "6", text: "grbwth is best" },
  { id: "7", text: "manoji is gabvger " },
  { id: "8", text: "manoji is beabvt aserbtst shdfu figj o" },
  {
    id: "9",
    text:
      "manoji is beabvt ancf jadjh hauweh ajf  anoji is beabvt ancf jadjh hauweh ajf   anoji is beabvt ancf jadjh hauweh ajf    aserbtst shdfu figj o anoji is beabvt ancf jadjh hauweh ajf    anoji is beabvt ancf jadjh hauweh ajf   ",
  },
  { id: "10", text: "manoji is  figj o" },
  { id: "11", text: "manoji is beabvt aserbtst shdfu figj o" },
  {
    id: "12",
    text:
      "manoji is beabvt ancf jadjh hauweh ajf  anoji is beabvt ancf jadjh hauweh ajf   anoji is beabvt ancf jadjh hauweh ajf    aserbtst shdfu figj o anoji is beabvt ancf jadjh hauweh ajf    anoji is beabvt ancf jadjh hauweh ajf   ",
  },
];

const splitlist = (list) => {
  const left_col = [];
  const right_col = [];
  list.map((item, index) => {
    if (index % 2 === 0) {
      left_col.push(<NoteCard note={item} />);
    } else {
      right_col.push(<NoteCard note={item} />);
    }
  });
  return [left_col, right_col];
};

const NotesList = (props) => {
  const [leftcol, rightcol] = splitlist(tempdata);
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
  },
  list: {
    width: "50%",
    padding: 5,
  },
});

export default NotesList;
