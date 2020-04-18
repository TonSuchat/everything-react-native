import React from "react";
import { Text } from "react-native";
import { useDispatch } from "react-redux";
import { INavigation } from "../constants/base";
import { signout } from "../store/user/actions";

const SignoutScreen: React.FC<INavigation> = (props) => {
  const dispatch = useDispatch();

  const handleSignout = async () => {
    dispatch(signout());
  };

  return <Text onPress={handleSignout}>Sign Out</Text>;
};

export default SignoutScreen;
