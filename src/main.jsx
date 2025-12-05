import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router"; // IMPORTANT: Use 'react-router-dom'
import Root from "./Root";
import Projects from "./Projects";
import Profile from "./Profile";
import ProjectDetails from "./ProjectDetails"; // New component for project details

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        // This is the Home/Profile page
        index: true,
        Component: Profile,
      },
      {
        path: "/projects",
        Component: Projects,
      },
      // New dynamic route for project details
      {
        path: "/projects/:projectId",
        Component: ProjectDetails,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
