import React, { useState } from "react";
import { StyleSheet, TouchableNativeFeedback } from "react-native";
import { Card, CardItem, Text, Button, Left, Right } from "native-base";

import TopCardItem from "./carditems/topcarditem";
import AttachmentCard from "./carditems/attachmentcard";
import ImageCarditem from "./carditems/imagecarditem";
import BottomCardItem from "./carditems/bottomcarditem";

const Subtaskcard = (props) => {
  const [opencard, setopencard] = useState({ url: false, attachment: false });

  return (
    <TouchableNativeFeedback onPress={() => console.log("touched")}>
      <Card>
        <TopCardItem />

        {props.task.imagelink !== "" ? <ImageCarditem /> : null}

        <CardItem>
          <Text>makfnuhfuishvfsghb sfy safio ahasuif sgf sdvsn vjcasduf u</Text>
        </CardItem>

        <BottomCardItem />

        <Button
          full
          style={styles.blockbuttons}
          onPress={() =>
            setopencard((prevstate) => ({
              url: !prevstate.url,
              attachment: false,
            }))
          }
        >
          <Text>Urls</Text>
        </Button>
        {opencard.url ? <AttachmentCard /> : null}

        <Button
          full
          style={styles.blockbuttons}
          onPress={() =>
            setopencard((prevstate) => ({
              url: false,
              attachment: !prevstate.attachment,
            }))
          }
        >
          <Text>Attachments</Text>
        </Button>
        {opencard.attachment ? <AttachmentCard /> : null}
      </Card>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  blockbuttons: {
    borderColor: "white",
    borderTopWidth: 0.5,
  },
});

export default Subtaskcard;
