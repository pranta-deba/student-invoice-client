import { Outlet } from "react-router-dom";
import Footer from "../shared/footer";
import Navbar from "../shared/navbar";
import useAuth from "../../hooks/useAuth";

const Root = () => {
  const { appLoader } = useAuth();

  if (appLoader) {
    return <div>Loading...</div>;
  }
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
