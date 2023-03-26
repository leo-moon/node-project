const { program } = require("commander");

const contacts = require("./db/contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
    case "get":
      const contactById = await contacts.getContact(id, name, email, phone);
      return console.log(contactById);
    case "add":
      const addingContact = await contacts.addContact({ name, email, phone });
      return console.log(addingContact);
    case "remove":
      const deletingContact = await contacts.removeContact(id);
      return console.log(deletingContact);
  }
};

program
  .option("-a, --action <type>")
  .option("-id, --id <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-p, --phone <type>");

program.parse();

const options = program.opts();
invokeAction(options);
