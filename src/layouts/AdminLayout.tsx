import { Outlet } from "react-router-dom";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";

const AdminLayout = () => {
  return (
    <>
      <ScrollToTop />

      <div className="min-h-screen bg-neutral-950 text-white">
        <Navbar />

        <div className="mx-auto max-w-7xl px-6 py-10">
          <Outlet />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default AdminLayout;
