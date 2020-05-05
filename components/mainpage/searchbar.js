import React, { useState } from "react";
import { Container, Header, Item, Input, Icon } from "native-base";
import { StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = (props) => {
  const [searchtxt, setsearchtxt] = useState("");

  return (
    <Header searchBar rounded>
      <Item style={styles.item}>
        <Icon name="ios-search" />
        <Input
          placeholder="Search"
          value={searchtxt}
          onChangeText={(text) => setsearchtxt(text)}
        />
        <Feather size={20} name="filter" />
      </Item>
    </Header>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: 10,
    borderRadius: 25,
  },
});

export default SearchBar;
