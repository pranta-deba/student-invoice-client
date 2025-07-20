import { Outlet } from "react-router-dom";
import Footer from "../shared/footer";
import Navbar from "../shared/navbar";

const Root = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-142px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
