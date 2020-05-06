import React, { useState } from "react";
import { Text, Container, Tab, Tabs, ScrollableTab } from "native-base";
import { StyleSheet, FlatList } from "react-native";

import TaskTitle from "../components/addtaskpage/titlecard";
import { ImageSlider, Noimage } from "../components/addtaskpage/imageslider";
import Tabsection from "../components/addtaskpage/tabcomponent";

const AddTaskScreen = (props) => {
  const [images, setimages] = useState([
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",
  ]);

  return (
    <Container>
      <TaskTitle />
      <Tabsection />
    </Container>
  );
};

export default AddTaskScreen;
