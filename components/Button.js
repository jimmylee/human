import styles from "~/components/Button.module.scss";

import * as React from "react";
import * as U from "~/common/utilities";

import LoaderSpinner from "~/components/LoaderSpinner";

const Button = (props) => {
  if (props.loading) {
    return (
      <button className={U.classNames(styles.button, styles.loading)} style={props.style}>
        <LoaderSpinner />
      </button>
    );
  }

  if (!U.isEmpty(props.type)) {
    return (
      <label
        className={styles.button}
        onClick={props.onClick}
        children={props.children}
        htmlFor={props.htmlFor}
        type={props.type}
        style={props.style}
      />
    );
  }

  if (!U.isEmpty(props.href)) {
    return <a {...props} className={styles.button} target="_blank" children={props.children} />;
  }

  return (
    <button
      {...props}
      className={styles.button}
      onClick={props.onClick}
      children={props.children}
    />
  );
};

export default Button;
