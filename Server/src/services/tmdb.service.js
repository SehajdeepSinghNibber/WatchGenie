import axios from "axios";
import config from "../config/config.js";

const fetchFromTmdb = async (url) => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + config.TMDB_API_KEY,
    },
    timeout: 10000,
  };

  let lastError;

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const response = await axios.get(url, options);

      if (response.status !== 200) {
        throw new Error(
          "Failed to fetch data from TMDB: " + response.statusText
        );
      }

      return response.data;
    } catch (error) {
      lastError = error;

      if (!["ECONNRESET", "ETIMEDOUT", "ECONNABORTED"].includes(error.code) || attempt === 3) {
        throw error;
      }
    }
  }

  throw lastError;
};

  // For fetch it would be
  //const res = fetch(url,options)
  //const data = await res.json()
  //return data
  //and in header we would have to add method: "GET"

export default fetchFromTmdb;
