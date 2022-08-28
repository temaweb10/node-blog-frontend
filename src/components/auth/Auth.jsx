import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();
  const location = useLocation();
  /*   const [v, setV] = useState();

  useEffect(() => {
    console.log(location.pathname);
    setV(v + 1);
  }, [location.pathname]);
 */
  return (
    <div>
      {localStorage.getItem("login")
        ? console.log("в системе")
        : navigate("/register")}
    </div>
  );
}

export default Auth;
