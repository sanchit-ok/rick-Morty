import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout";
import Home from "./Components/Home";
import AllCharacters from "./Components/AllCharacters";
import Episodes from "./Components/Episodes";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/characters" element={<AllCharacters />} />
      <Route path="/episodes" element={<Episodes />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
