import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
  const [categoryNews, setCategoryNews] = useState([]);
  const { id } = useParams();
  const data = useLoaderData();

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == 1) {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filteredNews);
      return;
    }

    const filteredNews = data.filter((news) => news.category_id == id);
    setCategoryNews(filteredNews);
  }, [id, data]);

  return (
    <div>
      <h1>Total {categoryNews.length} found </h1>
      <div className="grid gap-6">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
