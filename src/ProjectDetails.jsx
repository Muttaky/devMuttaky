import React from "react";
import { useParams, Link } from "react-router";

// Note: In a real app, you would fetch this data based on the ID from an API or file
const projectData = {
  1: {
    name: "nextSale (Full Stack E-commerce)",
    tech: "Next.js, React, Node.js, Express, MongoDB, Firebase Auth",
    description:
      "nextSale is a buy & sell network featuring secure user authentication, product posting, and a robust admin panel for managing users and sales.",
    liveLink: "https://next-sale-client.vercel.app/",
    repoLink: "https://github.com/Muttaky/nextSale-client",
    image: "/nextSale.png",
    challenges: [
      "Implementing server-side rendering with Next.js for improved SEO.",
      "Managing complex state across multiple nested components.",
      "Securing API endpoints using JWT authentication on the Express server.",
    ],
    improvements: [
      "Integrate a live chat feature for buyer-seller communication.",
      "Add a complex search and filtering mechanism (e.g., Elastic Search).",
      "Implement a dedicated payment gateway (Stripe/PayPal).",
    ],
  },
  2: {
    name: "krishiLink (Social Agro Network)",
    tech: "React, Node.js, Express, MongoDB, Firebase Auth",
    description:
      "KrishiLink is a MERN-based social platform designed for the agricultural community to share knowledge, posts, and connect farmers with industry experts.",
    liveLink: "https://krishi-link-client.netlify.app/",
    repoLink: "https://github.com/Muttaky/krishiLink",
    image: "/krishiLink.png",
    challenges: [
      "Designing a scalable database structure for user posts and interactions (likes, comments).",
      "Optimizing image upload and storage performance.",
      "Ensuring real-time updates for the social feed without excessive API calls.",
    ],
    improvements: [
      "Implement an AI-powered crop disease detection feature.",
      "Create a dedicated marketplace section for selling produce/equipment.",
      "Introduce user roles (Farmer, Expert, General User) with role-based features.",
    ],
  },
  3: {
    name: "HERO.IO (Responsive App Store UI)",
    tech: "React.js, React Router, DaisyUI",
    description:
      "A pure frontend project demonstrating mastery of responsive design, modern UI libraries (DaisyUI/Tailwind), and dynamic rendering of product data.",
    liveLink: "https://taupe-elf-e3364d.netlify.app/",
    repoLink: "https://github.com/Muttaky/HERO.IO",
    image: "/hero.png",
    challenges: [
      "Achieving pixel-perfect responsiveness across all screen breakpoints.",
      "Optimizing asset loading for fast page speeds.",
      "Implementing custom interactive UI elements solely using CSS utility classes.",
    ],
    improvements: [
      "Convert the project to Next.js for static site generation.",
      "Integrate a dummy API to fetch product data dynamically.",
      "Add a dark mode toggle for enhanced user preference.",
    ],
  },
};

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectData[projectId];

  if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold">Project Not Found</h2>
        <Link
          to="/projects"
          className="text-blue-500 hover:underline mt-4 block"
        >
          Go back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto bg-white shadow-lg rounded-lg my-10">
      <Link
        to="/projects"
        className="text-[#0967C2] hover:underline mb-6 inline-block"
      >
        &larr; Back to All Projects
      </Link>
      <h1 className="text-4xl font-extrabold text-[#0967C2] mb-6  pb-3">
        {project.name}
      </h1>

      <div className="lg:flex lg:space-x-8">
        {/* Project Image (Large) */}
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-auto rounded-xl shadow-xl border border-gray-200"
          />
        </div>

        {/* Details Content */}
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700">Description</h2>
          <p className="text-gray-600">{project.description}</p>

          <h2 className="text-2xl font-semibold text-gray-700">
            Technology Stack
          </h2>
          <p className="text-lg font-medium text-gray-800">
            **{project.tech}**
          </p>

          <div className="flex space-x-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-[#0967C2] text-white hover:bg-blue-700"
            >
              🚀 Live Project
            </a>
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-black text-white hover:bg-gray-800"
            >
              ⚙️ GitHub Repository
            </a>
          </div>
        </div>
      </div>

      {/* Required Sections */}
      <div className="mt-10 pt-6 border-t border-gray-200 space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-red-600 mb-3">
            🎯 Challenges Faced
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            {project.challenges.map((challenge, index) => (
              <li key={index}>{challenge}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-green-600 mb-3">
            💡 Potential Improvements & Future Plans
          </h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
            {project.improvements.map((improvement, index) => (
              <li key={index}>{improvement}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
