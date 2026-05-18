import { Routes, Route } from "react-router-dom";
import { routes } from "../routes.jsx";

export default function Routing() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.id} path={route.path} element={route.element()} />
      ))}
    </Routes>
  );
}
