import React, { useState } from "react";
import {
  Container,
  Header,
  Tab,
  Tabs,
  TabHeading,
  Icon,
  Text,
  View,
} from "native-base";
import { StyleSheet } from "react-native";

import Images from "./images/imageslist";

const Subtasks = (props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#ccc",
        margin: 10,
        marginBottom: 0,
      }}
    >
      <Text>Subtasks</Text>
    </View>
  );
};
const Attach = (props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#ccc",
      }}
    >
      <Text>Attach</Text>
    </View>
  );
};

const Tabsection = (props) => {
  return (
    <Container>
      <Tabs
        tabBarPosition="bottom"
        tabBarUnderlineStyle={{
          position: "absolute",
          top: 0,
        }}
      >
        <Tab
          heading={
            <TabHeading>
              <Icon name="image" />
            </TabHeading>
          }
        >
          <Images imagelinks={props.images} />
        </Tab>
        <Tab
          heading={
            <TabHeading>
              <Text>Subtasks</Text>
            </TabHeading>
          }
        >
          <Subtasks />
        </Tab>
        <Tab
          heading={
            <TabHeading>
              <Icon name="apps" />
            </TabHeading>
          }
        >
          <Attach />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Tabsection;
