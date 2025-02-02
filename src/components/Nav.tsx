import { memo, useContext } from "react";
import "../assets/nav.css";
import { UiContext } from "../store/context";

interface NavigationProps {
  addCat?: () => void;
}

const Navigation = memo((props: NavigationProps) => {
  const context = useContext(UiContext);

  if (!context) {
    throw new Error("Dashboard must'be used with UiProvider");
  }

  const [ui, setUi] = context;
  const user = ui.user;

  function setTheme() {
    const theme = ui.theme === "light" ? "dark" : "light";
    setUi((value) => ({ ...value, theme }));
  }

  function setSidebar() {
    const sidebar = !ui.sidebar;
    setUi((value) => ({ ...value, sidebar }));
  }

  function logout() {
    setUi((value) => ({ ...value, user: null }));
  }

  return (
    <nav className="app-nav">
      <div className="nav-container">
        <a href="#" className="nav-logo">
          <h1 className="title">catabase</h1>
          <div className="logo-shine"></div>
        </a>

        <div className="nav-actions">
          {user && (
            <>
              <button
                onClick={props.addCat}
                className="mobile-menu"
                aria-label="Menu"
              >
                <i className="ri-add-circle-fill"> </i>&nbsp;Add cat
              </button>
              <button
                onClick={setSidebar}
                className="mobile-menu"
                aria-label="Menu"
                style={{
                  backgroundColor: context[0].sidebar
                    ? "var(--button-primary-color)"
                    : "",
                }}
              >
                <i className="ri-menu-line"></i>&nbsp;Settings
              </button>
              <button
                onClick={logout}
                className="mobile-menu"
                aria-label="Menu"
              >
                <i className="ri-logout-box-r-line"></i>&nbsp;{user.username}{" "}
                {user.surname}
              </button>
            </>
          )}

          <button
            onClick={setTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            <i className="ri-sun-line sun-icon"></i>
            <i className="ri-moon-line moon-icon"></i>
          </button>
        </div>
      </div>
    </nav>
  );
});

export default Navigation;
