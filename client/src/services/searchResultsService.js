import axios from "axios";

const API_URL = "http://localhost:5000/api/search/results";

export const getSearchResults = async (query) => {
  const response = await axios.get(`${API_URL}?q=${query}`);
  return response.data;
};