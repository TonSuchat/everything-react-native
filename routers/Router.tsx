import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import AppNavigators from "./AppNavigators";
import AuthNavigators from "./AuthNavigators";
import { UserState } from "../store/user/types";
import { RootState } from "../store";

const Router: React.FC = () => {
  const userState: UserState = useSelector<UserState>(
    (rootState: RootState) => rootState.user
  );

  // const bootstrapAsync = async () => {
  //   let userToken;

  //   try {
  //     userToken = await AsyncStorage.getItem("userToken");
  //   } catch (e) {
  //     // Restoring token failed
  //   }

  //   // After restoring token, we may need to validate it in production apps

  //   // This will switch to the App screen or Auth screen and this loading
  //   // screen will be unmounted and thrown away.
  //   dispatch({ type: "RESTORE_TOKEN", token: userToken });
  // };

  // useEffect(() => {
  //   bootstrapAsync();
  // }, []);

  return (
    <NavigationContainer>
      {!userState.userToken ? <AuthNavigators /> : <AppNavigators />}
    </NavigationContainer>
  );
};

export default Router;
