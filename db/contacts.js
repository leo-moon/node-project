const { constants } = require("buffer");
const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "contacts.json");

const listContacts = async () => {

  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContact = async (id, name, email, phone) => {
  console.log(id, name, email, phone);
  const contacts = await listContacts();
  const result = contacts.filter(
    contact =>
      contact.id.includes(`${id}`) ||
      contact.name.includes(`${name}`) ||
      contact.phone.includes(`${phone}`) ||
      contact.email.includes(`${email}`)
  );
  return result || null;
};

const removeContact = async id => {
  const contacts = await listContacts();
  const index = contacts.findIndex(item => item.id === id);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result;
};

const addContact = async ({ name, email, phone }) => {
  const contacts = await listContacts();
  const result =  contacts.forEach(contact => {
    console.log('jjjjjj',contact.name, name);
    if (
      contact.name == name 
      // &
      // contact.phone === phone &
      // contact.email === email
    )
      return true;
  });
  console.log(result);

  if (result) return 5555;
  else {
    const addingContact = {
      id: nanoid(),
      name,
      email,
      phone,
    };
    contacts.push(addingContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return addingContact;
  }
};

module.exports = {
  listContacts,
  getContact,
  addContact,
  removeContact,
};
