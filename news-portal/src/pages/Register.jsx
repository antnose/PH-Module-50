import { Link } from "react-router";

const Register = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content">
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <h2 className="text-center pt-4 font-bold text-2xl">
            Create an account
          </h2>

          <div className="divider px-4" />

          <div className="card-body pt-0">
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

              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            <p className="text-center">
              Already have an account ?{" "}
              <Link to={"/auth/login"} className="text-green-500 font-semibold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
