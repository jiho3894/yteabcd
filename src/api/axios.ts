import axios from "axios";

// instance 생성 토큰은 env로 감추기
const token = process.env.REACT_APP_API_TOKEN;

export const instance = axios.create({
  baseURL: token,
});
