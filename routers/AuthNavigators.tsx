import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SigninScreen from "../screens/SigninScreen";

const Stack = createStackNavigator();

const AuthNavigators: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Signin">
      <Stack.Screen
        name="Signin"
        component={SigninScreen}
        options={{
          headerTitle: "Sign In",
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigators;
