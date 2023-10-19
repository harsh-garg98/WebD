require("dotenv").config();
const express = require("express");
var morgan = require("morgan");
const cors = require("cors");
const app = express();
const Person = require("./models/person");

app.use(express.json());
app.use(cors());
app.use(express.static("dist"));

const requestLogger = (request, response, next) => {
  console.log("Method: ", request.method);
  console.log("Path: ", request.path);
  console.log("Body: ", request.body);
  console.log("----------");
  next();
};

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "Unknown Endpoint" });
};

const errorHandler = (error, request, response, next) => {
  console.log(error.message);
  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  }
  next(error);
};

morgan.token("postString", (request, response) => JSON.stringify(request.body));

// let persons = [
//   {
//     id: 1,
//     name: "Arto Hellas",
//     number: "040-123456",
//   },
//   {
//     id: 2,
//     name: "Ada Lovelace",
//     number: "39-44-5323523",
//   },
//   {
//     id: 3,
//     name: "Dan Abramov",
//     number: "12-43-234345",
//   },
//   {
//     id: 4,
//     name: "Mary Poppendieck",
//     number: "39-23-6423122",
//   },
// ];

app.use(requestLogger);
app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :postString"
  )
);
app.use(morgan("tiny"));

// app.get("/api/persons", (request, response) => {
//   response.json(persons);
// });

app.get("/api/persons", (request, response) => {
  Person.find({}).then((people) => response.json(people));
});

// app.get("/api/persons/:id", (request, response) => {
//   const id = Number(request.params.id);
//   const person = persons.find((p) => p.id === id);

//   if (person) {
//     response.json(person);
//   } else {
//     response.status(404).end();
//   }
// });

app.get("/api/persons/:id", (request, response) => {
  Person.findById(request.params.id).then((person) => response.json(person));
});

// app.get("/info", (request, response) => {
//   const numContacts = persons.length;
//   const now = new Date();

//   response.send(
//     `<div><p>Phonebook has info for ${numContacts} people</p><br /><p>${now}</p></div>`
//   );
// });

app.delete("/api/persons/:id", (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

// const generateIdOne = () => {
//   const maxId = persons.length > 0 ? Math.max(...persons.map((p) => p.id)) : 0;
//   return maxId + 1;
// };

// const generateIdTwo = () => {
//   return Math.floor(Math.random() * 10000);
// };

app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (!body.name) {
    response.status(400).json({ error: "No name found" });
  }
  if (!body.number) {
    response.status(400).json({ error: "No number found" });
  }
  if (body.name === undefined) {
    response.status(400).json({ error: "No name found" });
  }
  // if (persons.find((p) => p.name === body.name)) {
  //   response.status(400).json({ error: "Name already exists" });
  // }

  const person = new Person({
    name: body.name,
    number: body.number,
  });
  person.save().then((savedContact) => response.json(savedContact));
});

app.put("/api/persons/:id", (request, response, next) => {
  const body = request.body;

  const newPerson = {
    name: body.name,
    number: body.number,
  };
  Person.findByIdAndUpdate(request.params.id, newPerson, { new: true })
    .then((updatedPerson) => response.json(updatedPerson))
    .catch((error) => next(error));
});

app.use(unknownEndpoint);
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
