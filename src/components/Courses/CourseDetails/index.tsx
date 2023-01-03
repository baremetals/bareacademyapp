/* eslint-disable camelcase */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";


import { CourseEntityResponseCollection } from "generated/graphql";
import { useAppSelector } from "app/hooks";
import { isUser } from "features/auth/selectors";


import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import { CourseDetailsTemplate } from './Template';

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
  const groups = course?.groups?.data;
  // const students = course?.attributes?.students?.data;
  const teacher = course?.teacher?.data;
  const imageUrl = course?.image;
  // console.log(groups![0].attributes?.slug);

  const [isloading, setIsLoading] = useState(false);


  const [errorMsg, setErrorMsg] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [isStudent, setIsStudent] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const { user: user } = useAppSelector(isUser);
  const me = user;
  // console.log('printing me',me)

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
    console.log("in this biatch");
    const stripe = await stripePromise;
    setIsLoading(true);
    await axios
      .post("/api/buy", {
        data: {
          total: course?.price,
          quantity: 1,
          course: courseId,
          imageUrl,
          isFree: course?.isFree,
          orderType,
        },
      })
      .then((res) => {
        // console.log(res);
        if (res?.status === 200 && res?.data?.status !== 400) {
          // console.log(res?.data?.data?.id);
          if (res?.data?.data?.id === "free-purchase") {
            setIsLoading(false);
            router.push("/home/orders/success?session_id=free-purchase");
          } else {
            setIsLoading(false);
            const session = res?.data?.data?.id;
            stripe?.redirectToCheckout({
              sessionId: session,
            });
          }
        }
      })
      .catch((err) => {
        // console.log(err.response.data.error);
        setIsLoading(false);
        if (
          err?.response?.data?.error === "You previously purchased this course"
        ) {
          setMessage(err?.response?.data?.error);
          setTimeout(() => {
            setErrorMsg(true);
          }, 10000);
        } else {
          setMessage("Sorry something went wrong please try again later.");
          setTimeout(() => {
            setErrorMsg(true);
          }, 10000);
        }
      });
  };

  // const joinCourse = async () => {
  //   // console.log("testing", isStudent);
  //   // console.log(id, me?.slug, me?.id);

  //   await axios
  //     .post("/api/join", {
  //       data: {
  //         joined: true,
  //         slug: me?.slug,
  //         course: course.id,
  //         user: me?.id,
  //         publishedAt: Date.now(),
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       if (res.data.msg) {
  //         setMessage(res.data.msg);
  //         setErrorMsg(true);
  //       } else {
  //         setMessage("You have been successfully added to the course");
  //         setErrorMsg(true);
  //       }
  //     })
  //     .catch((_err) => {
  //       setMessage("Sorry something went wrong please try again later.");
  //       setErrorMsg(true);
  //     });
  // };

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
      groupSlug={groups![0].attributes?.slug as string}
      handleBuy={handleBuy}
    />
  );
}

export default CourseDetails;
