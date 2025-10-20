import { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  if (loading) {
    return (
      <div className=" flex h-screen w-full items-center justify-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  if (user && user?.email) {
    return children;
  }

  return <Navigate to={"/auth/login"}></Navigate>;
};

export default PrivateRoute;
