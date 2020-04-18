import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { useDispatch } from "react-redux";
import ContactNavigator from "../screens/contacts/ContactNavigator";
import { Icon } from "react-native-elements";
import { signout } from "../store/user/actions";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const dispatch = useDispatch();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        icon={() => <Icon name="sign-out" type="font-awesome" size={25} />}
        label="Sign Out"
        onPress={() => dispatch(signout())}
      />
    </DrawerContentScrollView>
  );
};

const AppNavigators: React.FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Contacts"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        options={{
          drawerIcon: () => (
            <Icon name="address-book" type="font-awesome" size={25} />
          ),
        }}
        name="Contacts"
        component={ContactNavigator}
      />
    </Drawer.Navigator>
  );
};

export default AppNavigators;
