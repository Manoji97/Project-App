import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Mainscreen from "../screens/mainscreen";
import AddNoteScreen from "../screens/addnotescreen";
import AddTaskScreen from "../screens/addtaskscreen";

const Stack = createStackNavigator();

const TaskAppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "blue",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Mainscreen"
          component={Mainscreen}
          options={{
            title: "My home",
          }}
        />
        <Stack.Screen
          name="AddNoteScreen"
          component={AddNoteScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="AddTaskScreen"
          component={AddTaskScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default TaskAppNavigator;
