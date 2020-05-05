import React, { useState } from "react";
import { Container, Header, Item, Input, Icon } from "native-base";

const SearchBar = (props) => {
  const [searchtxt, setsearchtxt] = useState("");

  return (
    <Header searchBar rounded>
      <Item style={{ paddingHorizontal: 10 }}>
        <Icon name="ios-search" />
        <Input
          placeholder="Search"
          value={searchtxt}
          onChangeText={(text) => setsearchtxt(text)}
        />
        <Icon name="ios-people" />
      </Item>
    </Header>
  );
};

export default SearchBar;
