const express = require("express");
var morgan = require("morgan");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

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

morgan.token("postString", (request, response) => JSON.stringify(request.body));

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.use(requestLogger);
app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :postString"
  )
);
app.use(morgan("tiny"));

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((p) => p.id === id);

  if (person) {
    response.json(person);
  } else {
    response.status(404).end();
  }
});

app.get("/info", (request, response) => {
  const numContacts = persons.length;
  const now = new Date();

  response.send(
    `<div><p>Phonebook has info for ${numContacts} people</p><br /><p>${now}</p></div>`
  );
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);

  persons = persons.filter((p) => p.id !== id);
  response.status(204).end();
});

const generateIdOne = () => {
  const maxId = persons.length > 0 ? Math.max(...persons.map((p) => p.id)) : 0;
  return maxId + 1;
};

const generateIdTwo = () => {
  return Math.floor(Math.random() * 10000);
};

app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (!body.name) {
    response.status(400).json({ error: "No name found" });
  }
  if (!body.number) {
    response.status(400).json({ error: "No number found" });
  }
  if (persons.find((p) => p.name === body.name)) {
    response.status(400).json({ error: "Name already exists" });
  }

  const newPerson = {
    id: generateIdTwo(),
    name: body.name,
    number: body.number,
  };
  persons = persons.concat(newPerson);
  response.json(newPerson);
});

app.use(unknownEndpoint);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
