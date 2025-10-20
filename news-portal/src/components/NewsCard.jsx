import { FaStar, FaRegBookmark, FaShareAlt, FaEye } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
    tags,
    id,
  } = news;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800">{author?.name}</h3>
            <p className="text-sm text-gray-500">
              {new Date(author?.published_date).toISOString().split("T")[0]}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-500">
          <FaRegBookmark className="cursor-pointer hover:text-gray-700" />
          <FaShareAlt className="cursor-pointer hover:text-gray-700" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold text-gray-800 px-4 pb-2 hover:text-blue-600 cursor-pointer">
        {title}
      </h2>

      {/* Thumbnail */}
      <img
        src={thumbnail_url}
        alt="news"
        className="w-full h-56 object-cover rounded-md px-4"
      />

      {/* Details */}
      <div className="px-4 py-3">
        <p className="text-gray-600 text-sm leading-relaxed">
          {details.length > 150 ? `${details.slice(0, 150)}...` : details}
        </p>
        <Link
          to={`/newsDetails/${id}`}
          className="text-orange-500 font-semibold mt-2 hover:underline"
        >
          Read More
        </Link>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-100 flex justify-between items-center px-4 py-3 text-sm">
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={
                i < Math.round(rating?.number)
                  ? "text-orange-500"
                  : "text-gray-300"
              }
            />
          ))}
          <span className="text-gray-700 font-semibold ml-1">
            {rating?.number}
          </span>
        </div>

        <div className="flex items-center gap-1 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

// 51-5 Load & Display News Details Page 0.48
