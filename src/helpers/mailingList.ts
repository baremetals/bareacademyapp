import axios from "axios";

export const addToMailingList = async (email: string) => {
  return axios.post("/api/sendgrid", {
    data: {
      email,
    },
  });
};
