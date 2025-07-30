import { Outlet } from "react-router-dom";
import Footer from "../shared/footer";
import Navbar from "../shared/navbar";
import useAuth from "../../hooks/useAuth";
import { Loader2 } from "lucide-react";

const Root = () => {
  const { appLoader } = useAuth();

  if (appLoader) {
    return (
      <div className="min-h-[calc(100vh-142px)] flex justify-center items-center h-40">
        <Loader2 className="animate-spin h-8 w-8 text-[#F25925]" />
      </div>
    );
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
