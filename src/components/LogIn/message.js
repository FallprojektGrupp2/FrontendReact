import { useState } from "react";
import "./Login.css";
import { Alert } from "antd";
const Message = (props) => {
  const response = props.response;
  if (response.status === 200 ){
    props.setToken(response)
  }
  return (
    <>

    </>
  );
};
export default Message;
