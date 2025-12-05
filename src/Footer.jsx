import React from "react";
import { Link } from "react-router";
import { toast } from "react-toastify"; // Import toast for notifications

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // --- Copy Functionality ---
  const handleCopy = (value, type) => {
    navigator.clipboard.writeText(value);
    toast.success(`${type} copied to clipboard!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  // -------------------------

  const emailAddress = "muttaky9@gmail.com";
  const phoneNumber = "+8801953330213";

  return (
    <footer className="footer footer-center bg-base-200 text-base-content p-10 mt-auto">
      <div>
        {" "}
        <nav>
          <div className="grid sm:grid-flow-col grid-flow-row gap-4">
            {/* Email Button */}
            <button
              // Adjusted classes for a cleaner, flatter white button look
              className="btn bg-white text-black border-gray-200 hover:bg-gray-50 normal-case"
              onClick={() => handleCopy(emailAddress, "Email")}
            >
              📧 muttaky9@gmail.com
            </button>

            {/* Phone Button */}
            <button
              // Adjusted classes for a cleaner, flatter white button look
              className="btn bg-white text-black border-gray-200 hover:bg-gray-50 normal-case"
              onClick={() => handleCopy(phoneNumber, "Phone number")}
            >
              📞 +8801953330213
            </button>
          </div>
        </nav>
        {/* Copyright and Contact Info */}
        <aside className="text-sm md:text-base space-y-2">
          <p>
            Copyright © {currentYear} - All rights reserved by
            <Link className="text-[#0967C2] hover:underline ml-1" to="/">
              devMuttaky
            </Link>
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
