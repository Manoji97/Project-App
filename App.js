import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Spinner, Container, Header } from "native-base";

import Mainscreen from "./screens/mainscreen";
import AddNoteScreen from "./screens/addnotescreen";
import SubtaskList from "./components/subtask/subtasklist";

class App extends Component {
  state = {
    loading: true,
  };

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Spinner color="green" />;
    }
    return (
      <Container>
        <Header />
        <Mainscreen />
      </Container>
    );
  }
}

export default App;
