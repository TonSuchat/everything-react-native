import React from "react";
import { ActivityIndicator, StatusBar, View } from "react-native";

const Loading: React.FC = () => {
  return (
    <View>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
};

export default Loading;
