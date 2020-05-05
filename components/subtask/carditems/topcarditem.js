import React, { useState } from "react";
import { StyleSheet, ProgressBarAndroid } from "react-native";
import { CardItem, Button, Icon, Left, Body, Right, Item } from "native-base";

const TopCardItem = (props) => {
  return (
    <CardItem>
      <Left>
        <Body>
          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.5}
          />
        </Body>
      </Left>
      <Right>
        <Item>
          <Button transparent>
            <Icon active name="camera" />
          </Button>
          <Button transparent>
            <Icon active name="alarm" />
          </Button>
          <Button transparent>
            <Icon active name="add" />
          </Button>
        </Item>
      </Right>
    </CardItem>
  );
};

export default TopCardItem;
