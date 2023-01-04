/* eslint-disable camelcase */
import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";


import { CourseEntityResponseCollection } from "generated/graphql";
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";


import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import { CourseDetailsTemplate } from './Template';
import { purchase } from 'helpers';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK as string);

function CourseDetails(props: {
  props: {
    data: { courses: CourseEntityResponseCollection };
    loading: boolean;
    error: any;
  };
}) {
  const router = useRouter();
  // const { slug } = router.query;

  const { data } = props.props;
  const course = data?.courses?.data[0]!.attributes;
  const courseId = data?.courses?.data[0]!.id;
  const groups = course?.groups?.data || [];
  // const students = course?.attributes?.students?.data;
  // const groupSlug = groups?.length < 0 ? "" : groups![0].attributes?.slug;
  const teacher = course?.teacher?.data;
  const imageUrl = course?.image;
  // console.log(data);

  const [isloading, setIsLoading] = useState(false);


  const [errorMsg, setErrorMsg] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [groupSlug, setGroupSlug] = useState<string>("");
  const [isStudent, setIsStudent] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const { user: user } = useAppSelector(isUser);
  const me = user;
  // console.log('printing me',me)

  useEffect(() => {
    if (groups.length > 0) {
      setGroupSlug(groups![0].attributes?.slug as string);
    }
  }, [])

  useEffect(() => {
    if (me?.id && groups!.length > 0) {
      setIsStudent(true);
      // groups?.forEach((student) => {
      //   const usrId = student?.id;
      //   if (usrId == me?.id) {
      //     setIsStudent(true);
      //   }
      // });
    }
  }, [groups, me?.id]);

  // useEffect(() => {
  //   if (me?.id && students?.length !== 0) {
  //     students?.forEach((student) => {
  //       const usrId = student?.id;
  //       if (usrId == me?.id) {
  //         setIsStudent(true);
  //       }
  //     });
  //   }
  // }, [students, me?.id]);

  useEffect(() => {
    if (me?.id && teacher?.id === me?.id) {
      setIsTeacher(true);
    }
  }, [me?.id]);

  const handleBuy = async (orderType: string) => {
    const stripe = await stripePromise;
    setIsLoading(true);
    const purchaseData = {
      total: course?.price as number,
      quantity: 1,
      course: courseId as string,
      imageUrl: imageUrl as string,
      isFree: course?.isFree as boolean,
      orderType,
    };
    try {
      const response = await purchase({ ...purchaseData });
      // console.log("I am the respones: ", response?.data?.data);
      if (response?.data?.data?.id === "free-purchase") {
        setIsLoading(false);
        router.push("/home/orders/success?session_id=free-purchase");
      }
     else {
      setIsLoading(false);
      const session = response?.data?.data?.id;
      stripe?.redirectToCheckout({
        sessionId: session,
      });
     }
    } catch (err: any) {
      setIsLoading(false);
      console.log("I am the Error: ", err?.response?.data?.error);
      if (
        err?.response?.data?.error === "You previously purchased this course"
      ) {
        setMessage(err?.response?.data?.error);
        setErrorMsg(true);
        setTimeout(() => {
          setErrorMsg(false);
        }, 10000);
      } else {
        setMessage("Sorry something went wrong please try again later.");
        setErrorMsg(true);
        setTimeout(() => {
          setErrorMsg(false);
        }, 10000);
      }
    }
  };


  return (
    <CourseDetailsTemplate
      id={me?.id as string}
      me={me?.id as string}
      title={course?.title as string}
      isFree={course?.isFree as boolean}
      isStudent={isStudent}
      price={course?.price as number}
      errorMsg={errorMsg}
      message={message}
      duration={course?.duration as number}
      level={course?.level as string}
      description={course?.description as string}
      isTeacher={isTeacher}
      notes={course?.notes as string}
      isloading={isloading}
      // groupSlug={''}
      groupSlug={groupSlug as string}
      handleBuy={handleBuy}
    />
  );
}

export default CourseDetails;
