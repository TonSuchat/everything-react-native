import React from "react";
import { INavigation } from "../../constants/base";
import ContactDetail from "../../components/contacts/ContactDetail";

type ContactDetailScreenType = INavigation & {};

const ContactDetailScreen: React.FC<ContactDetailScreenType> = (props) => {
  const { contact } = props.route.params || {};
  return <ContactDetail contact={contact} />;
};

export default ContactDetailScreen;
