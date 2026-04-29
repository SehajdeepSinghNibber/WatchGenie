import axios from "axios";
import config from "../config/config.js";

const fetchFromTmdb = async (url) => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + config.TMDB_API_KEY,
    },
  };

  const response = await axios.get(url, options);

  if (response.status !== 200) {
    throw new Error(
      "Failed to fetch data from TMDB: " + response.statusText
    );
  }

  return response.data;
};

  // For fetch it would be
  //const res = fetch(url,options)
  //const data = await res.json()
  //return data
  //and in header we would have to add method: "GET"

export default fetchFromTmdb;