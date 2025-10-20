import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content">
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <h2 className="text-center pt-4 font-bold text-2xl">
            Login your account
          </h2>

          <div className="divider px-4" />

          <div className="card-body pt-0">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
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
