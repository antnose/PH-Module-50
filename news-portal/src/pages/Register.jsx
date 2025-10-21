import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { use } from "react";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({
          displayName: name,
          photoUrl: photoUrl,
        })
          .then(setUser({ ...user, displayName: name, photoUrl: photoUrl }))
          .catch((error) => {
            setUser(user);
          });

        Swal.fire({
          title: "Account Created Successfully! 🎉",
          icon: "success",
          draggable: true,
        });
        navigate("/");
      })
      .catch((err) => {
        // Log the full error for debugging

        // Determine the error message to display
        let errorMessage = "An unknown error occurred. Please try again.";

        // Check if the error is from Firebase Auth (or similar service)
        if (err && err.code) {
          switch (err.code) {
            case "auth/email-already-in-use":
              errorMessage =
                "This email address is already in use. Try logging in or use a different email. 📧";
              break;
            case "auth/invalid-email":
              errorMessage =
                "The email address is not valid. Please check for typos. ❌";
              break;
            case "auth/weak-password":
              errorMessage =
                "The password is too weak. Please choose a stronger one (minimum 6 characters). 🔒";
              break;
            case "auth/operation-not-allowed":
              errorMessage =
                "Email/Password sign-up is not enabled. Contact support. 🛡️";
              break;
            default:
              // For other auth errors, use the provided message if available
              errorMessage = err.message || errorMessage;
          }
        } else if (err && err.message) {
          // For non-Firebase errors that have a message
          errorMessage = err.message;
        }

        // Display the error to the user using SweetAlert2
        Swal.fire({
          title: "Error Creating Account 😟",
          text: errorMessage,
          icon: "error",
          draggable: true,
        });
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content">
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <h2 className="text-center pt-4 font-bold text-2xl">
            Create an account
          </h2>

          <div className="divider px-4" />

          <form onSubmit={handleRegister} className="card-body pt-0">
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Enter your name"
              />

              {/* Photo Url */}
              <label className="label">Photo URL</label>
              <input
                name="photoUrl"
                type="text"
                className="input"
                placeholder="Photo url"
              />

              {/* Email */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />

              {/* Password */}
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />

              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
            </fieldset>
            <p className="text-center">
              Already have an account ?{" "}
              <Link to={"/auth/login"} className="text-green-500 font-semibold">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

// 51-8 Update User Profile and redirect on Registration 5.53
