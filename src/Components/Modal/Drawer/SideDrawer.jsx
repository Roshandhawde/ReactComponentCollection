import { useEffect } from "react";
import Style from "./SideDrawer.module.css"; // Import the CSS file

const SideDrawer = ({ isOpen, onClose, children }) => {
  // Close on "Escape" key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div>
      {/* Overlay */}
      {isOpen && <div className={Style.overlay} onClick={onClose}></div>}

      {/* Drawer */}
      <div className={`${Style.side_drawer} ${isOpen ? Style.open : ""}`}>
        <button className={Style.close_btn} onClick={onClose}>
          ✖
        </button>
        <ul>{children}</ul>
      </div>
    </div>
  );
};

export default SideDrawer;
