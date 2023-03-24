const { constants } = require("buffer");
const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "contacts.json");
// const contactsPath = path.resolve("db", "contacts.json");

// TODO: задокументировать каждую функцию
const listContacts = async () => {
  // ...твой код
  // const data = await fs.readFile(`${__dirname}/contacts.json`);
  // const data = await fs.readFile(contactsPath, "utf-8");
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async id => {
  // ...твой код
  const contacts = await listContacts();
  const result = contacts.filter(contact => contact.id === id);
  return result || null;
};

const removeContact = async id => {
  // ...твой код
  const contacts = await listContacts();
  const index = contacts.findIndex(item => item.id === id);
  console.log(index)
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  console.log(result)

  return result;
};

const addContact = async ({ name, email, phone }) => {
  // ...твой код
  const contacts = await listContacts();
  const addingContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(addingContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return addingContact;
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  removeContact,
};
