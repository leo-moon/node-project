// console.log("Welcome to Hell")

// const contacts = require("./db/contacts");
const contacts = require("./db/contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
    case "readContactById":
      const contactById = await contacts.getContactById(id);
      return console.log(contactById);
    case "addContact":
      const addingContact = await contacts.addContact({ name, email, phone });
      return console.log(addingContact);
    case "deleteContactById":
      const deletingContact = await contacts.removeContact(id);
      return console.log(deletingContact);
  }
};

// invokeAction({ action: "list" });
// invokeAction({ action: "readContactById", id: "qdggE76Jtbfd9eWJHrssH" });
// invokeAction({
//   action: "addContact",
//   name: "Allenaethtzesh Raymond",
//   email: "nulla.ante@vestibul.co.ukQQQ",
//   phone: "(992) 914-0000",
// });
invokeAction({ action: "deleteContactById", id: "e6ywwRe4jcqxXfCZOj_1e" });
