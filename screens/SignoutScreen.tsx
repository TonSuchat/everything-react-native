import React from "react";
import { Text } from "react-native";
import { useDispatch } from "react-redux";
import { INavigation } from "../constants/base";
import { signout } from "../store/user/actions";
import { toggleDrawer } from "../utility";

const SignoutScreen: React.FC<INavigation> = (props) => {
  const dispatch = useDispatch();

  const handleSignout = async () => {
    dispatch(signout());
    toggleDrawer(props.navigation);
  };

  return <Text onPress={handleSignout}>Sign Out</Text>;
};

export default SignoutScreen;
