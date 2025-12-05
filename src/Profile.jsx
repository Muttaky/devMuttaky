import React from "react";
import { Link } from "react-router";

const Profile = () => {
  const profileImage = "/Muttaky.png";
  const resumeLink =
    "https://drive.google.com/file/d/1rOxPsxFW1csDqHyk2_phe5IaxA9PNAmk/view?usp=sharing";

  return (
    <div className="bg-base-100 text-gray-800">
      {/* 1. Hero Section (Designation & Introduction) */}
      <div className="hero min-h-[80vh] bg-blue-950 text-white">
        <div className="hero-content flex-col lg:flex-row-reverse p-10 max-w-7xl mx-auto">
          {/* Profile Image with Ring */}
          <div className="flex-shrink-0 mb-8 lg:mb-0">
            <div className="avatar">
              <div className="w-56 md:w-64 lg:w-72 rounded-full ring ring-blue-600 ring-offset-4 ring-offset-blue-950 shadow-lg transition duration-500 hover:scale-105">
                <img
                  src={profileImage}
                  alt="Muttaky Ibne Sadeque Profile"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Hero Text Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-blue-400 mb-2 tracking-tight">
              Muttaky Ibne Sadeque
            </h1>
            <p className="text-2xl lg:text-4xl text-blue-200 font-light italic mb-4">
              **MERN Stack Web Developer**
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Turning ideas into functional, user-friendly web applications,
              focusing on clean UI, smooth user experience, and scalable backend
              structure.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex justify-center lg:justify-start space-x-4">
              {/* Resume Download Button */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={resumeLink}
                className="btn btn-primary bg-blue-600 hover:bg-blue-700 border-none text-white transition transform hover:scale-105"
              >
                📥 Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --- About Me Section --- */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#0967C2] mb-10 ">
          👋 About Me
        </h2>
        <div className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          <p className="mb-4">
            I’m a **MERN Stack Developer** with a solid foundation built through
            the Programming Hero bootcamp. My coding journey started with a
            fascination for turning static designs into dynamic, interactive web
            experiences.
          </p>
          <p className="mb-4">
            I enjoy the challenge of **full-stack development**, from designing
            responsive, modern frontends using **React.js** and **Next.js**
            (with Tailwind CSS) to building robust, scalable backends with
            **Node.js, Express.js**, and **MongoDB**.
          </p>
          <p>
            When I'm not coding, I enjoy learning new UI/UX principles and
            practicing photography, which helps me bring a keen eye for detail
            and aesthetics into my web development work. I am dedicated to
            writing **clean, maintainable code** and contributing to meaningful,
            user-centric applications.
          </p>
        </div>
      </div>

      {/* --- Skills Section (Visually Appealing) --- */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#0967C2] mb-10 ">
          🛠️ Technical Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
          {/* Skill List: Replace image paths with actual icons/images */}
          <SkillCard
            name="MongoDB"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
          />
          <SkillCard
            name="Express.js"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
          />
          <SkillCard
            name="React.js"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          />
          <SkillCard
            name="Node.js"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
          />
          <SkillCard
            name="HTML"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
          />
          <SkillCard
            name="CSS"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
          />
          <SkillCard
            name="JavaScript"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          />
          <SkillCard
            name="Tailwind CSS"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          />

          <SkillCard
            name="Next.js"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
          />

          <SkillCard
            name="Firebase"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
          />

          <SkillCard
            name="Git"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
          />
          <SkillCard
            name="Figma"
            image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
          />
        </div>
      </div>

      {/* --- Education & Experience Section --- */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#0967C2] mb-10 ">
          🎓 Education & Experience
        </h2>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Educational Qualification */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Educational Qualification
            </h3>
            <div className="space-y-6">
              <TimelineItem
                title="MERN Stack Web Development Bootcamp"
                institution="Programming Hero"
                date="2025"
                description="Completed a rigorous, project-based full-stack web development program focused on modern MERN technologies."
              />
              <TimelineItem
                title="B.Sc. in Computer Science & Engineering (CSE)"
                institution="National University"
                date="2019 - 2023"
                description="Computer science background, laying a foundation for logical thinking and problem-solving.Coursework completed"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for Skill Display
const SkillCard = ({ name, image }) => (
  <div className="p-4 bg-white shadow-lg rounded-xl transition duration-300 hover:shadow-xl hover:scale-[1.02] border border-gray-100">
    <img
      src={image}
      alt={name}
      className="w-16 h-16 mx-auto mb-2 object-contain"
    />
    <p className="text-sm font-semibold text-gray-700">{name}</p>
  </div>
);

// Helper component for Timeline
const TimelineItem = ({ title, institution, date, description }) => (
  <div className="relative pl-6 border-l-2 border-blue-400">
    <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1 -left-[7px]"></div>
    <h4 className="font-bold text-xl text-gray-800">{title}</h4>
    <p className="text-blue-600 font-medium italic">{institution}</p>
    <p className="text-sm text-gray-500 mb-2">{date}</p>
    <p className="text-gray-700 text-base">{description}</p>
  </div>
);

export default Profile;
