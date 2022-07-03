import Login from "../Pages/Login/Login";
import Search from "../Pages/Search/Search";
import Outlets from "../Pages/Outlets/Outlets";
import SingleOutlet from "../Pages/Outlets/SingleOutlet/SingleOutlet";
export const routes = [
  {
    name: "home",
    path: "/",
    component: Search,
    type: "secured",
  },
  {
    name: "login",
    path: "/login",
    component: Login,
    type: "unverified",
  },
  {
    name: "outlets",
    path: "/outlets/",
    component: Outlets,
    type: "secured",
  },
  {
    name: "outlet",
    path: "/outlets/:outletId",
    component: SingleOutlet,
    type: "secured",
  },
];
