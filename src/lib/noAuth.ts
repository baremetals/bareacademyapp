import { useMeQuery, User } from "../generated/graphql";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppDispatch } from "app/hooks";
import { setUser } from "features/auth";

// type msgType = Maybe<string[]> | undefined;

export const useNoAuth = () => {
  const { data, loading } = useMeQuery();
  const router = useRouter();
  const messages : any = data?.me;  

  useEffect(() => {
    if (!loading && (!messages)) {
      const me = data?.me as User;
      router.push(`/user-profile/${me.userIdSlug}`);
    } 
  }, [loading, data, router]);
};

export const useNoAuthPages = () => {
  const { data, loading } = useMeQuery();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const messages: any = data?.me;
  
  useEffect(() => {
    if (loading && !messages) {
      router.push(router.pathname);
    }

    if (!loading && !messages ) {
      const me = data?.me as User;
      dispatch(setUser(me));
    }
    
  }, [loading, data]);
};