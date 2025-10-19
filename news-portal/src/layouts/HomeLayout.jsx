import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <Header />
      <section className="w-11/12 mx-auto pt-4">
        <LatestNews />
      </section>
      <nav>
        <Navbar />
      </nav>
    </div>
  );
};

export default HomeLayout;
