import "remixicon/fonts/remixicon.css";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { UserRepository } from "./fake-backend/repository/user.ts";
import ErrorBoundary from "./components/ErrorBoundary.tsx";

if (!localStorage.getItem("user")) {
  localStorage.setItem(
    "user",
    JSON.stringify([
      {
        id: Math.floor(Math.random() * 1000 - 100 + 1000),
        name: "Berlin",
        username: "berlin",
        password: "1234",
      },
      {
        id: Math.floor(Math.random() * 1000 - 100 + 1000),
        name: "Paris",
        username: "paris",
        password: "4321",
      },
    ] as UserRepository[])
  );
}

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
  // </StrictMode>
);
