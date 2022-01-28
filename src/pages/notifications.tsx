import React from 'react'
import { requireAuthentication } from "lib/requireAuthentication";
import { GetServerSideProps } from "next";
import NotificationsPage from '../components/NotificationsPage'
import { useIsAuth } from 'lib/isAuth';

function Notifications() {
  useIsAuth();
    return (
      <>
        <NotificationsPage />
      </>
    );
}

export const getServerSideProps: GetServerSideProps = requireAuthentication(
  async (_ctx) => {
    return {
      props: {},
    };
  }
);

export default Notifications
