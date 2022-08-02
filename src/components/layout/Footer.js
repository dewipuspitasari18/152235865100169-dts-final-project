import React from "react";
// styles
import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className="text-muted">
          © {currentYear} Resep Makanan
        </p>
        <p className={styles.created}>
          Created{" "}
          <span>
          </span>{" "}
          Dewi Puspita Sari
        </p>
      </div>
    </footer>
  );
};

export default Footer;
