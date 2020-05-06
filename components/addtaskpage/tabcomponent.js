import React, { useState } from "react";
import {
  Text,
  Container,
  Tab,
  Tabs,
  ScrollableTab,
  Button,
  Icon,
  Item,
} from "native-base";
import { StyleSheet, FlatList, TouchableNativeFeedback } from "react-native";

const Tabsection = (props) => {
  const [expand, set_expand] = useState(false);
  return (
    <Container style={{ backgroundColor: "#cff", flex: expand ? 1 : 0.3 }}>
      <Tabs
        renderTabBar={() => <ScrollableTab />}
        style={{
          padding: 5,
        }}
      >
        <Tab heading="Text" style={{ backgroundColor: "#ccc", height: 200 }}>
          <Text>manoji is the best as always</Text>
        </Tab>
        <Tab heading="Notes">
          <Text>djahsjdf shfhs khsuh gushg</Text>
        </Tab>
        <Tab heading="Images">
          <Text>djahsjdf shfhs khsuh gushg</Text>
        </Tab>
        <Tab heading="Attachments">
          <Text>djahsjdf shfhs khsuh gushg</Text>
        </Tab>
      </Tabs>
      <Button
        bordered
        style={{
          position: "absolute",
          alignSelf: "center",
          bottom: -12,
          borderRadius: 25,
        }}
        onPress={() => {
          set_expand(!expand);
        }}
      >
        <Icon name="add" />
      </Button>
    </Container>
  );
};

export default Tabsection;
