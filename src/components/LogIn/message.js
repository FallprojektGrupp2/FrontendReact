import { useEffect, useState } from "react";
import "./Login.css";
import { Alert } from "antd";
const Message = (props) => {
  const [visibility, setVisibility] = useState(false);
  const [response, setResponse] = useState(false);
  const [isANumber, setIsANumber] = useState(true);
  const [responseMessage, setResponseMessage] = useState("");

  function chkInput(response) {
    setVisibility(true);
    if (response.status === 200) {
      setResponse(true);
      response.text().then((data) => {
        if (isNaN(data)) {
          setIsANumber(false);
          setResponseMessage(data);
          setTimeout(function () {
            window.location.reload();
          }, 2000);
        } else {
          sessionStorage.setItem("UserId", data);
          setTimeout(() => {
            app.innerHTML = "";
            render(app);
          }, 1000);
          setTimeout(function () {
            window.location.href = "../index.html";
          }, 2000);
        }
      });
    } else {
      response.text().then((response) => setResponseMessage(response));
    }
    setTimeout(function () {
      setVisibility(false);
    }, 3000);
  }
  return (
    <>
      {visibility ? (
        response ? (
          isANumber ? (
            <Alert message="Login successful..." type="success" />
          ) : (
            <Alert message={responseMessage} type="error" />
          )
        ) : (
          <Alert message={responseMessage} type="error" />
        )
      ) : null}
    </>
  );
};
export default Message;