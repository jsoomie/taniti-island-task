import {
  Home,
  Accommodations,
  Transportation,
  Attractions,
  FAQ,
  Visit,
} from "./pages";

export const routes = [
  { id: 1, label: "Home", path: "/", element: () => <Home /> },
  {
    id: 2,
    label: "Accommodations",
    path: "/accommodations",
    element: () => <Accommodations />,
  },
  {
    id: 3,
    label: "Transportation",
    path: "/transportation",
    element: () => <Transportation />,
  },
  {
    id: 4,
    label: "Attractions",
    path: "/attractions",
    element: () => <Attractions />,
  },
  { id: 5, label: "FAQs", path: "/faq", element: () => <FAQ /> },
  { id: 6, label: "Visit", path: "/visit", element: () => <Visit /> },
];
