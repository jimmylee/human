import styles from "~/components/Footer.module.scss";

import * as React from "react";

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      © 2021 Human Guild — Friends of{" "}
      <a href="https://near.org/" target="_blank">
        NEAR
      </a>{" "}
      — a decentralized application platform.
    </footer>
  );
};

export default Footer;
