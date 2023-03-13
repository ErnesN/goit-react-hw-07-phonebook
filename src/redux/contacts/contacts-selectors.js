export const getAllContacts = ({ contacts }) => contacts.items;
export const getFavoriteContacts = ({ contacts }) => {
  const favoriteContacts = contacts.items.filter(({ favorite }) => favorite);
  return favoriteContacts;
};
export const getFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts.items;
  }

  const normalizedFilter = filter.toLowerCase();
  const result = contacts.items.filter(({ name, number }) => {
    return (
      name.toLowerCase().includes(normalizedFilter) ||
      number.toLowerCase().includes(normalizedFilter)
    );
  });

  return result;
};
