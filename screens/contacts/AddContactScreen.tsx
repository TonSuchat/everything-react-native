import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AddContactForm from "../../components/contacts/AddContactForm";
import { INavigation } from "../../constants/base";
import { addContact } from "../../store/contacts/actions";
import { ContactState, Contact } from "../../store/contacts/types";
import { RootState } from "../../store";

type AddContactFormType = INavigation & {};

const AddContactScreen: React.FC<AddContactFormType> = (props) => {
  const dispatch = useDispatch();
  const { fetching, latestId }: ContactState = useSelector(
    (state: RootState) => state.contacts
  );

  const handleOnSubmit = (newContact: Contact) => {
    // // Should add new data into Redux store
    dispatch(addContact({ ...newContact, id: latestId + 1 }));
    props.navigation.goBack();
  };

  return (
    <AddContactForm
      onAddContactFormSubmit={(newContact) => handleOnSubmit(newContact)}
      isLoading={fetching}
    />
  );
};

export default AddContactScreen;
