import axios from "axios";

export const loginWebService = async (endpoint, body) => {
  try {
    const { data } = await axios.post(
      process.env.REACT_APP_SERVER_URL + endpoint,
      body
    );

    return data;
  } catch (error) {}
};
