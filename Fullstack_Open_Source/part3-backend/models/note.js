const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
// const url = `mongodb+srv://fullstack_learning:${password}@cluster0.dbqdfqx.mongodb.net/noteApp?retryWrites=true&w=majority`;
const url = process.env.MONGODB_URI;

console.log("connecting to ", url);

mongoose
  .connect(url)
  .then((result) => {
    console.log("Connected to url");
  })
  .catch((error) => {
    console.log("error: ", error.message);
  });

const noteSchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
    minLength: 5,
  },
  important: Boolean,
});

noteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Note", noteSchema);
