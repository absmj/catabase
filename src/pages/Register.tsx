import { Cat } from "../components/Cat";

import "../assets/login.css";
import User from "../fake-backend/entity/user";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router";
import { UiContext, UiContextType } from "../store/context";
import Navigation from "../components/Nav";
import { UserRepository } from "../fake-backend/repository/user";
import { toast } from "react-toastify";

export function Register() {
  const context = useContext(UiContext);

  if (!context) {
    throw new Error("Dashboard must'be used with UiProvider");
  }

  const [ui, setUi] = context;

  function setUser(data: User): void {
    const users = User.repository;
    const findIndex = users.findIndex(
      (user) => user.username === data.username
    );

    if (findIndex == -1) {
      users.push(data);
      localStorage.setItem("user", JSON.stringify(users));
      setUi((context: UiContextType) => ({ ...context, user: data }));
    } else {
      throw new Error("Username already taken ;(");
    }
  }

  const navigate = useNavigate();

  if (ui.user) {
    return <Navigate to={"/"} />;
  }

  function register() {
    const form = document.forms.namedItem("register");
    console.log(form);
    try {
      if (!form?.checkValidity()) {
        form?.reportValidity();
        throw new Error("Please correct!");
      }

      const formData = new FormData(form);
      const body = {} as { [key: string]: any };
      for (var [key, value] of formData.entries()) {
        body[key] = value;
      }

      if (body.password != body.passwordRetry) {
        throw new Error("Password doesnot match");
      }
      form.querySelector("fieldset")?.setAttribute("disabled", "disabled");
      const newUser = new User(body as UserRepository);
      setUser(newUser);
      navigate("/dashboard");
    } catch (e: any) {
      toast(e.message, {
        position: "bottom-right",
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
      form?.querySelector("fieldset")?.removeAttribute("disabled");
    }
  }

  return (
    <>
      <Navigation />
      <div id="login-panel">
        <Cat
          style={{ transform: "translateY(-200px) translateX(20px)" }}
          position={{
            y: "calc((100% - 400px) / 2)",
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
          <h1 className="title">Welcome, cat-lover </h1>

          <p className="subtitle">Please register the system</p>
          <form name="register" className="login-form">
            <fieldset>
              <div className="form-column">
                <label className="form-label" htmlFor="username">
                  Username
                </label>
                <input
                  className="form-input"
                  type="text"
                  name="username"
                  required
                />
              </div>

              <div className="form-column">
                <label className="form-label" htmlFor="username">
                  Name
                </label>
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  required
                />
              </div>

              <div className="form-column">
                <label className="form-label" htmlFor="username">
                  Surname
                </label>
                <input
                  className="form-input"
                  type="text"
                  name="surname"
                  required
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
                  id="password1"
                  required
                />
              </div>

              <div className="form-column">
                <label className="form-label" htmlFor="password">
                  Password Retry
                </label>
                <input
                  className="form-input"
                  type="password"
                  name="passwordRetry"
                  id="password2"
                  required
                />
              </div>

              <button
                type="button"
                className="submit-button"
                style={{ marginTop: "2em", marginBottom: "1em" }}
                onClick={register}
              >
                Submit
              </button>
              <p style={{ textAlign: "center" }}>
                <a style={{ color: "var(--text-color)" }} href="/login">
                  Sign in
                </a>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
}
