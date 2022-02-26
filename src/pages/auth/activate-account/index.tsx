import React, { useEffect } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";

import ConfirmAccount from "components/Auth/ConfirmAccount";
import "react-toastify/dist/ReactToastify.css";
import { client } from "lib/initApollo";
import Button from "components/Auth/Button";

// for data fetching
import { ErrorMsg } from "components/Input";
// import {
//   ActivateAccountDocument,
//   ActivateAccountMutationOptions,
// } from "generated/graphql";
import { withApollo } from "utils/withApollo";
import { ButtonContainer } from 'components/Auth/auth-styles';
import Link from 'next/link';
// import { useNoAuth } from "lib/noAuth";

const ActivateAccount = (props: any) => {
  // useNoAuth();
  const router = useRouter();
  // const response = props;
  // const res = response.data.activateAccount;

  // useEffect(() => {
  //   if (res == "Your account is now confirmed.") {
  //     toast.success(response.data?.activateAccount);
  //     setTimeout(() => {
  //       router.push("/signin");
  //     }, 3000);
  //   } else {
  //     toast.error(response.data?.activateAccount);
  //     setTimeout(() => {
  //       router.push("/");
  //     }, 3000);
  //   }
  // }, []);

  return (
    <>
      <ConfirmAccount image="/assets/images/activate.svg">
        Thanks for registering an account please login to access your account
        <br />
        <br />
        <ButtonContainer>
          {/* <Link href="/auth/signin"> */}
            <Button
              type="button"
              content="login"
              onClick={() => router.push("/auth/signin")}
            />
          {/* </Link> */}
        </ButtonContainer>
      </ConfirmAccount>

      <ToastContainer />
    </>
  );
};
// export const getServerSideProps: GetServerSideProps = async ({
//   query: { token },
// }: GetServerSidePropsContext) => {
//   // const { data } = await client.mutate<ActivateAccountMutationOptions>({
//   //   mutation: ActivateAccountDocument,
//   //   variables: {
//   //     token: token,
//   //   },
//   // });
//   return {
//     props: {  }, // will be passed to the page component as props
//   };
// };

export default withApollo({ ssr: false })(ActivateAccount);
