import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContactList from "../../components/contacts/ContactList";
import { INavigation } from "../../constants/base";
import { RootState } from "../../store";
import { getContacts } from "../../store/contacts/actions";
import { ContactState } from "../../store/contacts/types";
import Loading from "../../components/Loading";

type ContactListScreenType = INavigation & {};

const ContactListScreen: React.FC<ContactListScreenType> = (props) => {
  const dispatch = useDispatch();
  const { contacts, fetching }: ContactState = useSelector<ContactState>(
    (state: RootState) => state.contacts
  );

  useEffect(() => {
    dispatch(getContacts());
  }, []);

  const getContactFirstLetters = useCallback(
    (contacts: any): string[] => {
      return Array.from(
        new Set(
          [...contacts].map((item) => item.name[0].toLocaleLowerCase()).sort()
        )
      );
    },
    [contacts]
  );

  const getContactGroups = useCallback(
    (letters: string[]) => {
      return letters.map((letter: string) => ({
        title: letter.toUpperCase(),
        data: contacts.filter(
          (contact) => contact.name[0].toLocaleLowerCase() === letter
        ),
      }));
    },
    [contacts]
  );

  const letters = getContactFirstLetters(contacts);
  const contactGroups = getContactGroups(letters);

  if (fetching) {
    return <Loading />;
  }

  return (
    <ContactList
      contactGroups={contactGroups}
      onAddContactPressed={() => props.navigation.navigate("AddContact")}
      onItemPressed={(contact) =>
        props.navigation.navigate("ContactDetail", { contact })
      }
    />
  );
};
export default ContactListScreen;
