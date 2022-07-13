import React from "react";

type Props = {
  message: {
    user: {
      userId: string;
      name: string;
      img: string;
      url: string;
    };
    type: string;
    message?: string;
    file?: {
      name: string;
      size: string;
      url: string;
    };
    time: string;
  };
};

const Message = (props: Props) => {
  const { message } = props;
  return <div>Message</div>;
};

export default Message;
