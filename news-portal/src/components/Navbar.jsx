import { Link } from "react-router";
import { User } from "lucide-react";
import { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { IoIosLogOut } from "react-icons/io";
import Swal from "sweetalert2";

const Navbar = () => {
  const links = (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/career"}>Career</Link>
    </>
  );

  const { user, signOutUser } = use(AuthContext);

  const handleSignoutUser = () => {
    Swal.fire({
      title: "Are you sure you want to sign out?",
      text: "You will need to log in again to access your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6", // Blue confirm button
      cancelButtonColor: "#d33", // Red cancel button
      confirmButtonText: "Yes, sign me out",
    }).then((result) => {
      // 'result' contains the outcome of the user clicking a button

      // Check if the user clicked the 'Confirm' button
      if (result.isConfirmed) {
        // 1. User clicked 'Yes, sign me out', so now we call the function
        signOutUser()
          .then(() => {
            // 2. The sign-out was successful, show a success alert
            Swal.fire({
              title: "Signed Out! 👋",
              text: "You have been successfully signed out.",
              icon: "success",
              timer: 2000, // Auto-close after 2 seconds
              showConfirmButton: false,
            });
          })
          .catch((error) => {
            // 3. Handle any error that occurs during sign-out

            Swal.fire({
              title: "Sign Out Failed",
              text: "There was an error signing you out. Please try again.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="navbar w-11/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-gray-600"
          >
            {links}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-7 text-gray-600">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <img src={`${user.photoUrl}`} alt="" />

            <button onClick={handleSignoutUser} className="flex btn">
              Logout
            </button>
          </>
        ) : (
          <Link to={"/auth/login"} className="flex btn">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
