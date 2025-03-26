import API from "../config/axios";
import { QUIZE_KEY, QUIZE_URI } from "../constants/getEnv";

export const getQuize = async (lim: string = "1") => {
  try {
    const response = await API.get(
      `${QUIZE_URI}?apiKey=${QUIZE_KEY}&limit=${lim}`
    );
    if (!response.data) {
      console.error("Couldn't get the quize data");
      return;
    }
    return response.data[0];
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      return;
    } else {
      console.log(error);
      return;
    }
  }
};
