import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { useForm } from "react-hook-form";
import { Contact } from "../../store/contacts/types";

type AddContactFormType = {
  onAddContactFormSubmit: (contact: Contact) => void;
  isLoading: boolean;
};

const AddContactForm: React.FC<AddContactFormType> = (props) => {
  const { register, handleSubmit, setValue, errors } = useForm();

  useEffect(() => {
    register({ name: "name" }, { required: true });
    register({ name: "phone" }, { required: true });
  }, [register]);

  const onSubmit = (data) => {
    props.onAddContactFormSubmit(data);
  };

  return (
    <View style={styles.container}>
      <Input
        label="Name"
        placeholder="Name"
        containerStyle={styles.inputContainer}
        inputStyle={styles.input}
        leftIcon={<Icon name="user" />}
        errorStyle={styles.error}
        errorMessage={errors.name ? "Please enter your name" : ""}
        onChangeText={(text) => setValue("name", text)}
      />
      <Input
        label="Phone Number"
        placeholder="Phone number"
        containerStyle={styles.inputContainer}
        inputStyle={styles.input}
        leftIcon={<Icon name="phone" />}
        errorStyle={styles.error}
        errorMessage={errors.phone ? "Please enter your phone" : ""}
        onChangeText={(text) => setValue("phone", text)}
      />
      <Button
        style={styles.button}
        onPress={handleSubmit(onSubmit)}
        title="Submit"
        loading={props.isLoading}
        disabled={props.isLoading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    marginVertical: 10,
  },
  input: {
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 10,
  },
  error: {
    color: "red",
  },
});

export default AddContactForm;
