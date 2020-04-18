import React, { useEffect } from "react";
import { Input, Card, Button, Divider } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch } from "react-redux";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useForm } from "react-hook-form";
import { signin } from "../store/user/actions";

const SigninScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, setValue, errors } = useForm();

  useEffect(() => {
    register({ name: "email" }, { required: true });
    register({ name: "password" }, { required: true });
  }, [register]);

  const onSubmit = (data) => {
    dispatch(signin(data.email, data.password));
  };

  return (
    <Card>
      <Input
        containerStyle={styles.inputContainer}
        label="Email"
        placeholder="email@address.com"
        leftIcon={<Icon name="envelope" size={20} />}
        leftIconContainerStyle={styles.iconContainer}
        onChangeText={(text) => setValue("email", text)}
        errorStyle={styles.error}
        errorMessage={errors.email ? "Please enter your email" : ""}
      />
      <Input
        containerStyle={styles.inputContainer}
        label="Password"
        placeholder="Password"
        leftIcon={<Icon name="lock" size={20} />}
        leftIconContainerStyle={styles.iconContainer}
        secureTextEntry={true}
        onChangeText={(text) => setValue("password", text)}
        errorStyle={styles.error}
        errorMessage={errors.password ? "Please enter your password" : ""}
      />
      <Button
        title="Sign In"
        style={styles.button}
        onPress={handleSubmit(onSubmit)}
      />
      <Divider style={styles.divider} />
      <TouchableOpacity style={styles.textContainer}>
        <Text style={styles.text}>Sign Up</Text>
      </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    marginRight: 10,
  },
  inputContainer: {
    marginVertical: 10,
  },
  button: {
    marginVertical: 10,
  },
  textContainer: {
    marginTop: 10,
    alignItems: "center",
    borderColor: "gray",
  },
  text: {
    fontSize: 17,
    color: "gray",
  },
  divider: {
    marginVertical: 5,
    backgroundColor: "gray",
  },
  error: {
    color: "red",
  },
});

export default SigninScreen;
