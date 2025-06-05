import axios from "axios";
import Constants from "expo-constants";

const { API_URL } = Constants.manifest?.extra ?? {};

if (!API_URL) {
  throw new Error("API_URL not configured in app.json");
}

const api = axios.create({
  baseURL: API_URL,
});

export default api;
