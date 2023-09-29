import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Header } from "./components/Header";
import { CreateBS } from "./components/CreateBS";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/create-sheet",
        element: <CreateBS />,
      },
    ],
  },
]);
