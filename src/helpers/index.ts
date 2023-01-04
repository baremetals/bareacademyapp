import axios from "axios";

type TPurchase = {
  total: number;
  quantity: number;
  course: string;
  imageUrl: string;
  isFree: boolean;
  orderType: string;
};
export const purchase = async ({
  total,
  quantity,
  course,
  imageUrl,
  isFree,
  orderType,
}: TPurchase) => {
  return axios.post("/api/buy", {
    data: {
      total,
      quantity,
      course,
      imageUrl,
      isFree,
      orderType,
    },
  });
};
