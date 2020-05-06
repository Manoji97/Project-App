import React, { useState, useEffect } from "react";
import { Container } from "native-base";

import SearchBar from "../components/mainpage/searchbar";
import NotesList from "../components/mainpage/NotesList";
import AddNote from "../components/mainpage/addNoteicon";
import TaskTextArea from "../components/mainpage/tasktext";

import tempdata from "../model/tempdata";

const Mainscreen = (props) => {
  const [fab, setfab] = useState(false);
  const [tasks, settasks] = useState([]);

  useEffect(() => {
    settasks(tempdata);
  }, []);

  const togglefab = () => {
    setfab(!fab);
  };

  const addtasktotasks = (task) => {
    //should add to database
    settasks((prevstate) =>
      prevstate.concat({
        id: "34",
        type: "task",
        datecreated: new Date(),
        text: task,
        imagelink: "",
      })
    );
  };
  return (
    <Container>
      <SearchBar />
      <NotesList tasks={tasks} />
      <AddNote navigation={props.navigation} active={fab} toggle={togglefab} />
    </Container>
  );
};

export default Mainscreen;
