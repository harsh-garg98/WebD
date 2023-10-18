const mongoose = require("mongoose");

// password = fullstack_learning

if (process.argv.length < 3) {
  console.log("please provide password");
  process.exit(1);
}

if (process.argv.length === 4) {
  console.log(
    "name or number or password missing\nEnter in the following format: password name number\nOr don't include name and number to see all contacts"
  );
  process.exit(1);
}

if (process.argv.length > 5) {
  console.log(
    "Too many arguments\nEnter in the following format: password name number\nOr don't include name and number to see all contacts"
  );
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://fullstack_learning:${password}@cluster0.dbqdfqx.mongodb.net/phoneBook?retryWrites=true&w=majority`;

mongoose.set("strictQuery", false);
mongoose.connect(url);

const phoneBookSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", phoneBookSchema);

if (process.argv.length === 5) {
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
  });

  person.save().then((result) => {
    console.log(result);
    mongoose.connection.close();
  });
}

if (process.argv.length === 3) {
  Person.find({}).then((result) => {
    result.forEach((person) => {
      console.log(person);
    });
    mongoose.connection.close();
  });
}
