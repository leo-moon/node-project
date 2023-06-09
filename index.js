const { program } = require("commander");

// const yargs = require("yargs");
// const { hideBin } = require("yargs/helpers");

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

// ---------------------- To use program ----------------
program
  .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-p, --phone <type>");

program.parse();

const options = program.opts();
invokeAction(options);

// --------------------- To use yargs -------------------
// const arr = hideBin(process.argv);
// const { argv } = yargs(arr);
// invokeAction(argv);