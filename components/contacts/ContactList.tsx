import React, { useCallback } from "react";
import { StyleSheet, SectionList, SafeAreaView, View } from "react-native";
import { ListItem, Avatar, Button, Icon } from "react-native-elements";

type ContactListType = {
  contactGroups: any;
  onAddContactPressed: () => void;
  onItemPressed: (contact) => void;
};

const ContactList: React.FC<ContactListType> = (props) => {
  const renderSectionHeader = useCallback(
    ({ section: { title } }) => (
      <View style={styles.sectionGroup}>
        <Avatar rounded title={title} />
      </View>
    ),
    [props.contactGroups]
  );

  const renderListItem = useCallback(
    ({ item }) => (
      <ListItem
        title={item.name}
        subtitle={item.phone}
        // leftAvatar={{ source: { uri: item.image } }}
        bottomDivider
        onPress={() => props.onItemPressed(item)}
      />
    ),
    [props.contactGroups]
  );

  return (
    <SafeAreaView>
      <View style={styles.buttonContainer}>
        <Button
          title="Add Contact"
          onPress={() => props.onAddContactPressed()}
          icon={<Icon name="add" />}
        />
      </View>
      <SectionList
        keyExtractor={(item, index) => `${item}_${index}`}
        sections={props.contactGroups}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderListItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionGroup: {
    marginLeft: 16,
    marginVertical: 5,
    marginBottom: 10,
  },
  buttonContainer: {
    marginVertical: 5,
    padding: 10,
  },
});

export default ContactList;
