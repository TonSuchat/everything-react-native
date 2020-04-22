export const contentTypeJSONHeader = { "Content-Type": "application/json" };

export const toggleDrawer = (navigation) => {
  if (!navigation) return;
  navigation.toggleDrawer();
};

// export const transformContact = (contact: any): Contact => ({
//   name: `${contact.name.title} ${contact.name.first} ${contact.name.last}`,
//   phone: contact.cell,
//   image: contact.picture ? contact.picture.large : null,
// });
