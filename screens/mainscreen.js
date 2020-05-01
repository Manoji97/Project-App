import React, { useState } from "react";
import { Container } from "native-base";

import SearchBar from "../components/searchbar";
import NotesList from "../components/NotesList";
import AddNote from "../components/addNote";

const Mainscreen = (props) => {
  const [fab, setfab] = useState(false);
  const togglefab = () => {
    console.log(fab);
    setfab(!fab);
  };
  return (
    <Container>
      <SearchBar />
      <NotesList />
      <AddNote active={fab} toggle={togglefab} />
    </Container>
  );
};

export default Mainscreen;
