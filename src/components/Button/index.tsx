import React from "react";


const Button = ({ type, children, ...props }: any) => {
  return (
    <button {...props} type={type}>
      {children}
    </button>
  );
};




export default Button;