import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppDispatch } from "app/hooks";
import { setUser } from "features/auth";
import axios from "axios";



export const useIsAuth = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  
  const getUser = async() => {
    await axios.post("/api/user")
    .then((res) => {
      if (!res?.data) {
        router.replace(`/${router.pathname}`);
      } else {
        const me = res?.data;
        dispatch(setUser(me));
      }
    })
    .catch((err) => {
      console.log(err)
    })
  }
  useEffect(() => {
    getUser();
  }, []);
};

