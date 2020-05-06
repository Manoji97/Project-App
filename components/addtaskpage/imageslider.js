import React from "react";
import { StyleSheet } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { Container, Button, Icon, View, Text } from "native-base";

const ImageSlider = (props) => {
  return (
    <SliderBox
      images={props.images}
      sliderBoxHeight={200}
      onCurrentImagePressed={(index) => console.log(`image ${index} pressed`)}
      dotColor="#FFEE58"
      inactiveDotColor="#90A4AE"
      autoplay
      circleLoop
      paginationBoxVerticalPadding={20}
    />
  );
};

const Noimage = (props) => {
  return (
    <View style={noimagestyles.container}>
      <Button bordered style={noimagestyles.button}>
        <Icon style={noimagestyles.icon} name="ios-add" />
      </Button>
      <Text style={noimagestyles.text}>add Image</Text>
    </View>
  );
};

const noimagestyles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "grey",
  },
  button: {
    borderRadius: 10,
    elevation: 5,
  },
  icon: {
    fontSize: 40,
  },
  text: {
    fontSize: 15,
    marginTop: 8,
    color: "grey",
  },
});

export { ImageSlider, Noimage };
