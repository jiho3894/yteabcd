import axios from "axios";

const token = process.env.REACT_APP_API_TOKEN;

export const instance = axios.create({
  baseURL: token,
});
