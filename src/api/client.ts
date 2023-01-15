import axios from "axios";

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

client.interceptors.response.use((config) => {
  return config.data;
});

export default client;
