import { useLoaderData, useParams } from "react-router";
import Header from "../components/Header";
import RightAside from "../components/HomeLayout/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import { useEffect, useState } from "react";

const NewsDetails = () => {
  const [filteredNews, setFilteredNews] = useState({});

  const news = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const res = news.find((neww) => neww.id == id);
    setFilteredNews(res);
  }, [id, news]);

  return (
    <div>
      <header className="py-3">
        <Header />
      </header>

      <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 py-4">
        <section className="col-span-9">
          <h2 className="font-bold mb-5">News Details</h2>
          <NewsDetailsCard filteredNews={filteredNews} />
        </section>

        <aside className="col-span-3">
          <RightAside />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
