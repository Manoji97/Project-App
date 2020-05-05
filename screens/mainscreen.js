import React, { useState, useEffect } from "react";
import { Container } from "native-base";

import SearchBar from "../components/mainpage/searchbar";
import NotesList from "../components/mainpage/NotesList";
import AddNote from "../components/mainpage/addNoteicon";
import TaskTextArea from "../components/mainpage/tasktext";

const tempdata = [
  { id: "1", type: "notes", text: "manoji is best", imagelink: "" },
  { id: "2", type: "notes", text: "manoji is wsgf g", imagelink: "" },
  { id: "3", type: "notes", text: "manoji is beabgsgst", imagelink: "" },
  {
    id: "4",
    type: "notes",
    text: "manoji is abtrw ",
    imagelink:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  },
  { id: "5", type: "notes", text: "manoji is beavgsst", imagelink: "" },
  { id: "6", type: "notes", text: "grbwth is best", imagelink: "" },
  { id: "7", type: "notes", text: "manoji is gabvger ", imagelink: "" },
  {
    id: "8",
    type: "notes",
    text: "manoji is beabvt aserbtst shdfu figj o",
    imagelink: "",
  },
  {
    id: "9",
    type: "notes",
    text:
      "manoji is beabvt ancf jadjh hauweh ajf  anoji is beabvt ancf jadjh hauweh ajf   anoji is beabvt ancf jadjh hauweh ajf    aserbtst shdfu figj o anoji is beabvt ancf jadjh hauweh ajf    anoji is beabvt ancf jadjh hauweh ajf   ",
    imagelink:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  },
  { id: "10", type: "notes", text: "manoji is  figj o", imagelink: "" },
  {
    id: "11",
    type: "task",
    text: "manoji is beabvt aserbtst shdfu figj o",
    imagelink: "",
  },
  {
    id: "12",
    type: "notes",
    text:
      "manoji is beabvt ancf jadjh hauweh ajf  anoji is beabvt ancf jadjh hauweh ajf   anoji is beabvt ancf jadjh hauweh ajf    aserbtst shdfu figj o anoji is beabvt ancf jadjh hauweh ajf    anoji is beabvt ancf jadjh hauweh ajf   ",
    imagelink: "",
  },
];

const Mainscreen = (props) => {
  const [fab, setfab] = useState(false);
  const [tasktextarea, settasktextarea] = useState(false);
  const [tasks, settasks] = useState([]);

  useEffect(() => {
    settasks(tempdata);
  }, []);

  const togglefab = () => {
    setfab(!fab);
  };
  const closetextarea = () => {
    settasktextarea(false);
  };
  const settextarea = () => {
    settasktextarea(true);
    setfab(false);
  };
  const addtasktotasks = (task) => {
    //should add to database
    settasks((prevstate) =>
      prevstate.concat({ id: "34", type: "task", text: task, imagelink: "" })
    );
    settasktextarea(false);
  };
  return (
    <Container>
      <SearchBar />
      {tasktextarea ? (
        <TaskTextArea
          closetextarea={closetextarea}
          addtasktotasks={addtasktotasks}
        />
      ) : null}
      <NotesList tasks={tasks} />
      <AddNote active={fab} toggle={togglefab} settextarea={settextarea} />
    </Container>
  );
};

export default Mainscreen;
