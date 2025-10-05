import React from "react";
import { styles } from "../styles";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary border-t border-secondary/20 py-6">
      <div className={`${styles.paddingX} max-w-7xl mx-auto`}>
        <div className="text-center">
          <p className="text-secondary text-[14px] sm:text-[16px]">
            © {currentYear} Prerit Goyal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
