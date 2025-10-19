import { CiFacebook, CiTwitter, CiInstagram } from "react-icons/ci";

const FindUs = () => {
  return (
    <div className="mt-5">
      <h1>Find US on</h1>

      <div className="stats stats-vertical shadow w-full mt-4">
        <button className="stat cursor-pointer ">
          <div className="stat-title flex items-center gap-3 ">
            <CiFacebook size={24} /> Facebook
          </div>
        </button>

        <button className="stat cursor-pointer">
          <div className="stat-title flex items-center gap-3">
            <CiTwitter size={24} /> Twitter
          </div>
        </button>

        <button className="stat cursor-pointer">
          <div className="stat-title flex items-center gap-3">
            <CiInstagram size={24} /> Instagram
          </div>
        </button>
      </div>
    </div>
  );
};

export default FindUs;
