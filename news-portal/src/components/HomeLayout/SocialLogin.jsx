import { Github } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <div className="space-y-3">
        <button className="btn w-full btn-outline ">
          <FcGoogle size={24} />
          Login with google
        </button>
        <button className="btn w-full btn-outline ">
          <Github />
          Login with github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
