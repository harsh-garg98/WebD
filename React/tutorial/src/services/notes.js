import axios from 'axios';
const baseUrl = 'http://localhost:3001/notes';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

const create = newObject => {
  const request = axios.post(baseUrl, newObject);
  return request.then(response => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then(response => response.data);
};

export default {
  getAll,
  create,
  update,
};


if(contains(prop("Associations"),"Imperial"),if(dateBetween(now(), prop("Last Contacted"), "months") > 0.25,
 "Time to reach out!", "👍"), if(dateBetween(now(), prop("Last Contacted"), "months") > 1, "Time to reach out!", "👍"))