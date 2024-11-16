import UserContext from "../userContext";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ children }) {
  const auth = useContext(UserContext);
  let location = useLocation();
  console.log(location)
  console.log(auth);

  if (!auth?.user) {
    return <Navigate to="/login"  replace />;
  }

  return children;
}

export default RequireAuth;
