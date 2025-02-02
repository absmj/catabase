import { memo, ReactNode, useContext } from "react";
import "../assets/sidebar.css";
import { UiContext } from "../store/context";
const Sidebar = memo(({ children }: { children: ReactNode }) => {
  const context = useContext(UiContext);
  return (
    <nav
      style={{
        transform: `translateX(${context?.[0].sidebar ? "450px" : "0"})`,
      }}
      id="sidebar"
    >
      {children}
    </nav>
  );
});

export default Sidebar;
