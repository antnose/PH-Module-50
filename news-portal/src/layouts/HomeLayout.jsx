import { Outlet } from "react-router";
import Header from "../components/Header";
import LeftAside from "../components/HomeLayout/LeftAside";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";
import RightAside from "../components/HomeLayout/RightAside";

const HomeLayout = () => {
  return (
    <>
      <header>
        <Header />
        <section className="w-11/12 mx-auto pt-4">
          <LatestNews />
        </section>
        <nav>
          <Navbar />
        </nav>
      </header>

      <main className="grid grid-cols-12 gap-5 w-11/12 mx-auto">
        <aside className="col-span-3">
          <LeftAside />
        </aside>

        <div className="col-span-6">
          <Outlet />
        </div>

        <aside className="col-span-3">
          <RightAside />
        </aside>
      </main>
    </>
  );
};

export default HomeLayout;
