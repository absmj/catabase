import { Cat } from "../components/Cat";

import "../assets/login.css";
import User from "../fake-backend/entity/user";
import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { UiContext, UiContextType } from "../store/context";
import Navigation from "../components/Nav";
import { toast } from "react-toastify";

export function Login() {
  const context = useContext(UiContext);

  if (!context) {
    throw new Error("Dashboard must'be used with UiProvider");
  }

  const [ui, setUi] = context;
  const user = ui.user;

  function setUser(data: User): void {
    setUi((context: UiContextType) => ({ ...context, user: data }));
  }

  const [username, setUsername] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const navigate = useNavigate();

  if (user) {
    return <Navigate to={"/"} />;
  }
  function login() {
    const form = document.forms.namedItem("login");
    if (!form?.checkValidity()) {
      form?.reportValidity();
      throw new Error("Please correct!");
    }
    if (!(username && password)) return;

    form.querySelector("fieldset")?.setAttribute("disabled", "disabled");

    try {
      const auth = User.auth(username, password);
      const user = new User(auth);
      setUser(user);
      navigate("/dashboard");
    } catch (e: any) {
      toast(e.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: ui.theme,
        type: "error",
      });
    } finally {
      form.querySelector("fieldset")?.removeAttribute("disabled");
    }
  }

  return (
    <>
      <Navigation />
      <div id="login-panel">
        <Cat
          style={{ transform: "translateY(-200px) translateX(20px)" }}
          position={{
            y: "calc((100% - 300px) / 2)",
            x: "calc((100% - 300px) / 2",
          }}
          cat_id={Date.now()}
          name="login-cat"
          width="300px"
          height="300px"
          options={null}
          isSelected={false}
        />
        <div className="form-wrapper">
          <h1 className="title">Hi, cat-lover </h1>

          <p className="subtitle">Please login the system</p>
          <form name="login" className="login-form">
            <fieldset>
              <div className="form-column">
                <label className="form-label" htmlFor="username">
                  Username
                </label>
                <input
                  className="form-input"
                  type="text"
                  name="username"
                  id="username"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-column">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  className="form-input"
                  type="password"
                  name="password"
                  id="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="button"
                className="submit-button"
                style={{ marginTop: "2em", marginBottom: "1em" }}
                onClick={login}
              >
                Submit
              </button>

              <p
                style={{
                  textAlign: "center",
                }}
              >
                <a style={{ color: "var(--text-color)" }} href="/register">
                  Sign up
                </a>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
}
