import { Link } from "react-router";

const NewsDetailsCard = ({ filteredNews }) => {
  console.log(filteredNews);
  return (
    <div className="space-y-5">
      <img
        className="w-full h-[350px] object-cover"
        src={filteredNews?.image_url}
        alt=""
      />
      <h2 className="text-2xl font-semibold">{filteredNews.title} </h2>
      <p className="">{filteredNews?.details}</p>

      <Link
        className="btn btn-secondary"
        to={`/category/${filteredNews.category_id}`}
      >
        All news in this category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
