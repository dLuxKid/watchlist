import axios from "axios";

export const api_key = '56605a441a49dc7356e8cd78ed2aefc5'

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
