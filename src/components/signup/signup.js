import React, { useState } from "react";
function SignUp() {
  const [UserData, setUserData] = useState({
    userEmail: "",
    userPassword: "",
  });

  const [errorData, setErrorData] = useState({
    userEmailError: "",
    userPasswordError: "",
  });

  const handelChange = (event) => {
    //   Event data
    // if (event.target.name == "emailInput") {
    //   //state->email
    //   setUserData({ ...UserData, userEmail: event.target.value });
    //   setErrorData({
    //     ...errorData,
    //     userEmailError:
    //       event.target.value.length == ""
    //         ? "Required"
    //         : event.target.value.includes("@")
    //         ? ""
    //         : "Plz Enter Correct Email!",
    //   });
    // } else if (event.target.name == "passInput") {
    //   //state->password
    //   setUserData({ ...UserData, userPassword: event.target.value });
    //   setErrorData({
    //     ...errorData,
    //     userPasswordError:
    //       event.target.value.length == ""
    //         ? "Required"
    //         : event.target.value.length > 8
    //         ? ""
    //         : "Password at least 8 characters",
    //   });
    // }

    // switch (event.target.name) {
    //   case "emailInput":
    //     setUserData({ ...UserData, userEmail: event.target.value });
    //     setErrorData({
    //       ...errorData,
    //       userEmailError:
    //         event.target.value.length == ""
    //           ? "Required"
    //           : event.target.value.includes("@")
    //           ? ""
    //           : "Plz Enter Correct Email!",
    //     });
    //     break;
    //   case "passInput":
    //     setUserData({ ...UserData, userPassword: event.target.value });
    //     setErrorData({
    //       ...errorData,
    //       userPasswordError:
    //         event.target.value.length == ""
    //           ? "Required"
    //           : event.target.value.length > 8
    //           ? ""
    //           : "Password at least 8 characters",
    //     });
    //     break;

    //   default:
    //     break;
    // }

    setUserData({ ...UserData, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <h1>SignUp From</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                // name="emailInput"
                name="userEmail"
                value={UserData.userEmail}
                onChange={(e) => handelChange(e)}
              />
              <div id="emailHelp" className="form-text text-danger">
                {errorData.userEmailError}
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                // name="passInput"
                name="userPassword"
                value={UserData.userPassword}
                onChange={(e) => handelChange(e)}
              />
              <div id="emailHelp" className="form-text text-danger">
                {errorData.userPasswordError}
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={
                errorData.userEmailError || errorData.userPasswordError
                  ? true
                  : false
              }
            >
              SignUp
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
