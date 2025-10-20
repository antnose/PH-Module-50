import swimming from "../../assets/swimming.png";
import playground from "../../assets/playground.png";
import classPic from "../../assets/class.png";
import longImg from "../../assets/bg.png";

const Qzone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h1 className="font-bold mt-7">Q-Zone</h1>
      <div className="grid gap-y-5">
        <img className="cursor-pointer" src={swimming} alt="" />
        <img className="cursor-pointer" src={classPic} alt="" />
        <img className="cursor-pointer" src={playground} alt="" />
        <img className="cursor-pointer px-2" src={longImg} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
