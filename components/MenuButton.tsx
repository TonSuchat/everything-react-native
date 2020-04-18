import React from "react";
import { Button, Icon } from "react-native-elements";

type MenuButtonType = {
  onPressed: () => void;
};

const MenuButton: React.FC<MenuButtonType> = (props) => {
  return (
    <Button
      type="clear"
      onPress={props.onPressed}
      icon={<Icon name="menu" />}
    />
  );
};
export default MenuButton;
