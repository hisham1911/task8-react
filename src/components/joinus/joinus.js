import { Outlet } from "react-router-dom";

function JoinUs() {
  return (
    <>
      <h1 className="text-primary">Movie App</h1>
      <h3>Join Us</h3>
      <Outlet />
    </>
  );
}

export default JoinUs;
