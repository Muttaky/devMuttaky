import React from "react";
import { Link } from "react-router";

const projectData = [
  {
    id: 1,
    name: "nextSale (Full Stack E-commerce)",
    description:
      "A buy & sell network where users can post, interact, and sell products. Features user authentication, dynamic product listings, and an administrative dashboard.",
    tech: "Next.js, React, Node.js, Express, MongoDB, Firebase Auth",
    image: "/nextSale.png",
    liveLink: "https://next-sale-client.vercel.app/",
    repoLink: "https://github.com/Muttaky/nextSale-client",
  },
  {
    id: 2,
    name: "krishiLink (Social Agro Network)",
    description:
      "A MERN-based social network where farmers and general users can share posts, interact, and connect on agricultural topics.",
    tech: "React, Node.js, Express, MongoDB, Firebase Auth",
    image: "/krishiLink.png",
    liveLink: "https://krishi-link-client.netlify.app/",
    repoLink: "https://github.com/Muttaky/krishiLink",
  },
  {
    id: 3,
    name: "HERO.IO (Responsive App Store UI)",
    description:
      "A responsive app store interface with interactive UI elements and dynamic product display, demonstrating strong frontend skills.",
    tech: "React.js, React Router, DaisyUI",
    image: "/hero.png",
    liveLink: "https://taupe-elf-e3364d.netlify.app/",
    repoLink: "https://github.com/Muttaky/HERO.IO",
  },
];

const Projects = () => {
  return (
    <div className="bg-base-200 py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-[#0967C2] mb-12 max-w-xl mx-auto">
        💻 Featured Projects
      </h2>
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-3 md:grid-cols-2">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

// Component for a single Project Card
const ProjectCard = ({ project }) => (
  <div className="card bg-white shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-[1.01] rounded-lg overflow-hidden">
    {/* Project Image */}
    <figure className="h-60 overflow-hidden">
      <img
        src={project.image}
        alt={project.name}
        className="object-cover w-full h-full transition duration-500 hover:scale-110"
      />
    </figure>

    {/* Project Content */}
    <div className="card-body p-6">
      <h3 className="card-title text-2xl text-[#0967C2] mb-2">
        {project.name}
      </h3>
      <p className="text-gray-600 text-sm mb-4">{project.description}</p>
      <p className="text-xs font-semibold text-gray-500 mb-4">
        🛠 Tech: **{project.tech}**
      </p>

      {/* Project Actions */}
      <div className="card-actions justify-end space-x-2">
        {/* REQUIRED: "View More / Details" button - links to a dedicated details route */}
        <Link
          to={`/projects/${project.id}`}
          className="btn btn-sm btn-info text-white"
        >
          View More / Details
        </Link>
        {/* Live Link */}
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm bg-[#0967C2] text-white hover:bg-blue-700"
        >
          LIVE LINK
        </a>
        {/* Repository Link */}
        <a
          href={project.repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm bg-black text-white border-black hover:bg-gray-800"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
);

export default Projects;
