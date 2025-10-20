import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser } = use(AuthContext);

  const handleLoginForm = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        // Assuming result contains user data on success
        // console.log("Login Success:", result.user);

        // 🚀 SUCCESS ALERT
        Swal.fire({
          icon: "success",
          title: "Welcome Back! 🎉",
          text: "You have successfully logged in.",
          confirmButtonText: "Continue",
          timer: 2500, // Optional: auto-close after 2.5 seconds
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });

        // You would typically redirect the user here
        // window.location.href = '/dashboard';
      })
      .catch((error) => {
        // Log the full error for developers
        console.error("Login Error:", error);

        // Map common errors to friendly messages (e.g., Firebase Auth errors)
        let errorMessage = "An unknown error occurred. Please try again.";

        if (error && error.code) {
          switch (error.code) {
            case "auth/user-not-found":
            case "auth/wrong-password":
              errorMessage =
                "Invalid email or password. Please check your credentials.";
              break;
            case "auth/invalid-email":
              errorMessage = "The email address format is invalid.";
              break;
            case "auth/user-disabled":
              errorMessage =
                "Your account has been disabled. Please contact support.";
              break;
            default:
              errorMessage = error.message || errorMessage;
          }
        } else if (error && error.message) {
          errorMessage = error.message;
        }

        // 🛑 ERROR ALERT
        Swal.fire({
          icon: "error",
          title: "Login Failed 😟",
          text: errorMessage,
          confirmButtonText: "Try Again",
          footer: '<a href="#">Forgot your password?</a>', // Helpful link
        });
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content">
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <h2 className="text-center pt-4 font-bold text-2xl">
            Login your account
          </h2>

          <div className="divider px-4" />

          <div className="card-body pt-0">
            <form onSubmit={handleLoginForm} className="fieldset">
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
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button type="submit" className="btn btn-neutral mt-4">
                Login
              </button>
            </form>
            <p className="text-center">
              Don't Have An Account ?{" "}
              <Link
                to={"/auth/register"}
                className="text-red-500 font-semibold "
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
