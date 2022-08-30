/* eslint-disable no-unused-vars */
import { QueryLazyOptions, useLazyQuery } from "@apollo/client";
// import { MeDocument } from "generated/graphql";
import { useDispatch } from "react-redux";
import { setUser } from "./reducers";



interface UseRefreshReduxMeResult {
  execMe: (options?: QueryLazyOptions<Record<string, any>> | undefined) => void;
  deleteMe: () => void;
  updateMe: () => void;
}



// const useRefreshReduxMe = (): UseRefreshReduxMeResult => {
//   // const [execMe, { data }] = useLazyQuery();
//   const reduxDispatcher = useDispatch();

//   // const deleteMe = () => {
//   //   reduxDispatcher(setUser("done"));
//   // };
//   // const updateMe = () => {
//   //   if (data && data.me && data.me.userName) {
//   //     reduxDispatcher(setUser(data.me));
//   //   }
//   // };

//   // return { execMe, deleteMe, updateMe };
// };
// export default useRefreshReduxMe;