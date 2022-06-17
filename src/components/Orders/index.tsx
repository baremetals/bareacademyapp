import React from "react";
import {
  BlogCardBody,
  BlogCardImage,
  BlogCardTitle,
  PageWrapper,
} from "styles/common.styles";
import Dashboard from "../Dashboard";

import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";
import RightSideBar from "components/Dashboard/RightSideBar";
import AdCardThree from "components/AdCards/AdCardThree";
import { OrderEntityResponseCollection } from "generated/graphql";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import {
  // PostCard,
  BlogCard,
  // CardTitle,
  CardDescription,
  // CardImage,
  CardDuration,
  CardStartDate,
  // CardBody,
  PageHeading,
  PageWrapGroup,
  ProfileWrapGroup,
  // PageWrapper,
} from "../../styles/common.styles";
import Link from "next/link";
import Footer from "components/Footer";

const Orders = (props: {
  props: { data: { orders: OrderEntityResponseCollection } };
}) => {
  const { user: user } = useAppSelector(isUser);
  const { data } = props.props;

  const orders = data.orders.data;
  // console.log(courses);
  return (
    <>
      <Dashboard>
        <PageHeading>@{user?.username} Orders</PageHeading>
        <ProfileWrapGroup
          className={user?.id ? "" : "container-loggedin"}
          // style={{ maxWidth: "1232px", margin: "auto", paddingTop: "6rem" }}
        >
          <PageWrapGroup
            style={{
              backgroundColor: "transparent",
              boxShadow: "none",
              borderRadius: "0",
            }}
          >
            <PageWrapper>
              {orders &&
                orders.map((order, _id) => (
                  <BlogCard key={order?.id}>
                    <Link
                      href={`/courses/${order?.attributes?.course?.data?.attributes?.slug}`}
                    >
                      <BlogCardImage
                        alt="order image"
                        src={
                          order?.attributes?.imageUrl
                        }
                      />
                    </Link>
                    <BlogCardBody>
                      <CardDuration>
                        Status - {order?.attributes?.status}
                      </CardDuration>
                      <BlogCardTitle>
                        <Link
                          href={`/courses/${order?.attributes?.course?.data?.attributes?.slug}`}
                        >
                          {order?.attributes?.course?.data?.attributes?.title}
                        </Link>
                      </BlogCardTitle>
                      <CardDescription style={{ marginBottom: "0" }}>
                        <CardStartDate>
                          Purchase on -
                          {dayjs(order?.attributes?.updatedAt).format(
                            "DD/MM/YYYY"
                          )}
                        </CardStartDate>
                      </CardDescription>
                    </BlogCardBody>
                  </BlogCard>
                ))}
            </PageWrapper>
          </PageWrapGroup>

          <RightSideBar>
            <AdCardThree />
          </RightSideBar>
        </ProfileWrapGroup>
      </Dashboard>
      {!user && <Footer />}
    </>
  );
};

export default Orders;
