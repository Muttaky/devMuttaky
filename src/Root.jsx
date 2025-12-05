import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Outlet will render Home/Profile, Projects, etc. */}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      {/* Toast container for copy-to-clipboard success message */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Root;
