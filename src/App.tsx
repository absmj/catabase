import "./App.css";
import "./assets/form.css";
import "./assets/cat-animations.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { Login } from "./pages/Login";

import { Dashboard } from "./pages/Dashboard";
import { UiContext, UiContextType } from "./store/context";
import { Register } from "./pages/Register";
import { ToastContainer } from "react-toastify";

function getLocalStorageUserContext() {
  if (localStorage.getItem("user-context") === null) return null;
  const userContext = JSON.parse(
    localStorage.getItem("user-context") || ""
  ) as UiContextType;
  return userContext;
}

function App() {
  const userContext = getLocalStorageUserContext();
  const [ui, setUiContext] = useState<UiContextType>(
    userContext || {
      theme: "light",
      sidebar: false,
      user: null,
    }
  );

  useEffect(() => {
    localStorage.setItem("user-context", JSON.stringify(ui));
  }, [ui]);

  return (
    <UiContext.Provider value={[ui, setUiContext]}>
      <div id="app" data-theme={ui?.theme || "light"}>
        <BrowserRouter>
          <Routes>
            <Route path={"/login"} element={<Login />} />
            <Route path={"/register"} element={<Register />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </div>
    </UiContext.Provider>
  );
}

export default App;
