import React from "react";
import { Card } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";

type ContactDetailType = {
  contact: any;
};

const ContactDetail: React.FC<ContactDetailType> = (props) => {
  return (
    <View style={styles.container}>
      <Card
        containerStyle={styles.card}
        image={{ uri: props.contact.image }}
        imageProps={{ resizeMode: "contain" }}
        title={props.contact.name}
      >
        <Text>Phone: {props.contact.phone}</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    alignItems: "center",
  },
});

export default ContactDetail;
