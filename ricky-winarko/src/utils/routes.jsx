import Profile from "pages/Profile/Profile";
import LandingPage from "pages/Landing/Landing";
import Error404Page from "pages/Error/E404";
import LearnrRenderer from "pages/LearnrRenderer/LearnrRenderer";

const RoutePaths = [
  {
    type: "route",
    name: "Landing Page",
    key: "landing",
    access: [],
    route: "/",
    component: <LandingPage />,
  },
  {
    type: "route",
    name: "Profile",
    key: "profile",
    access: ["Learnr", "Learnr Instructor"],
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "route",
    name: "Learnr Renderer",
    key: "render",
    access: ["Learnr Instructor"],
    route: "/render",
    component: <LearnrRenderer />,
  },
  {
    type: "route",
    name: "Error 404",
    key: "error404",
    access: [],
    route: "*",
    component: <Error404Page />,
  },
];

export const getRoute = (key) => {
  return RoutePaths.find((element) => {
    return element.key === key;
  }).route;
};

export default RoutePaths;
