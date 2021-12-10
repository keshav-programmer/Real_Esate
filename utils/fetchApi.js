import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "ded784b52emsh9a1572a6d959bd2p1eb3cbjsnb301fce0ea13",
    },
  });

  return data;
};
