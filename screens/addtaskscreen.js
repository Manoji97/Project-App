import React, { useState } from "react";
import { Text, Container, Tab, Tabs, ScrollableTab } from "native-base";
import { StyleSheet, FlatList } from "react-native";

import TaskTitle from "../components/addtaskpage/titlecard";
import { ImageSlider, Noimage } from "../components/addtaskpage/imageslider";
import Tabsection from "../components/addtaskpage/tabcomponent";
import Description from "../components/addtaskpage/description";

const AddTaskScreen = (props) => {
  const [title, set_title] = useState("");
  const [images, setimages] = useState([
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",
  ]);
  const [isdescopen, set_isdescopen] = useState(false);
  const [description, set_discription] = useState("");

  const toggle_description = () => {
    set_isdescopen(!isdescopen);
  };
  return (
    <Container>
      <TaskTitle text={title} settext={set_title} />

      <Description
        text={description}
        settext={set_discription}
        isopen={isdescopen}
        settoggle={toggle_description}
      />
      <Tabsection images={images} />
    </Container>
  );
};

export default AddTaskScreen;
