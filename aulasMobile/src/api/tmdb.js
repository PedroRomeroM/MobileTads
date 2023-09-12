import axios from "axios";

const apiKey = "a5bd835114760bc9b7a834b8762d0644";

export default axios.create({
  baseURL: "https://api/themoviedb.org/3/",
  params: {
    api_key: apiKey,
  },
});
