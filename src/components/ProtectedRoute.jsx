import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { TeamContext } from "../context/TeamContext";

function ProtectedRoute({ children }) {
  const { isLoggedIn } =
    useContext(TeamContext);

  return isLoggedIn
    ? children
    : <Navigate to="/" />;
}

export default ProtectedRoute;