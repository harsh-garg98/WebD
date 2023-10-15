import axios from "axios";

const baseUrl = "http://localhost:3002/persons";

const getAll = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

const create = (contactObject) => {
  return axios.post(baseUrl, contactObject).then((response) => response.data);
};

const update = (id, contactObject) => {
  return axios
    .put(`${baseUrl}/${id}`, contactObject)
    .then((response) => response.data);
};

const drop = (id) => {
  return axios.delete(`${baseUrl}/${id}`).then((response) => response.data);
};

export default { getAll, create, update, drop };
