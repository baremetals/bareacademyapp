import { useMeQuery, User } from "../generated/graphql";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppDispatch } from "app/hooks";
import { setUser } from "features/auth";



export const useIsAuth = () => {
  const { data, loading } = useMeQuery();
  const dispatch = useAppDispatch();
  
  const router = useRouter();
  useEffect(() => {
    if (!loading && !data?.me) {
      router.replace("/signin?next=" + router.pathname);
    } else {
      const me = data?.me as User;
      dispatch(setUser(me));
    }
  }, [loading, data, router]);
};

