import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ContactListScreen from "./ContactListScreen";
import AddContactScreen from "./AddContactScreen";
import ContactDetailScreen from "./ContactDetailScreen";
import { INavigation } from "../../constants/base";
import MenuButton from "../../components/MenuButton";
import { toggleDrawer } from "../../utility";

const Stack = createStackNavigator();

type ContactNavigatorType = INavigation & {};

const ContactNavigator: React.FC<ContactNavigatorType> = (props) => {
  return (
    <Stack.Navigator initialRouteName="ContactList">
      <Stack.Screen
        name="ContactList"
        component={ContactListScreen}
        options={{
          headerLeft: () => (
            <MenuButton onPressed={() => toggleDrawer(props.navigation)} />
          ),
        }}
      />
      <Stack.Screen name="AddContact" component={AddContactScreen} />
      <Stack.Screen
        name="ContactDetail"
        component={ContactDetailScreen}
        options={(props: any) => ({ title: props.route.params.contact.name })}
      />
    </Stack.Navigator>
  );
};

export default ContactNavigator;
