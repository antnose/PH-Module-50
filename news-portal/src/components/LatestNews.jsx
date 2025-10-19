import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex gap-2 items-center bg-gray-200">
      <p className="text-base-100 bg-[#D72050] px-3 py-2">Latest</p>
      <Marquee pauseOnHover={true}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur
          sequi quaerat placeat quisquam debitis Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Consequatur sequi quaerat placeat
          quisquam debitisLorem ipsum, dolor sit amet consectetur adipisicing
          elit. Consequatur sequi quaerat placeat quisquam debitis
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
