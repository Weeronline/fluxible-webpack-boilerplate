import React from 'react';

import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p> {new Date().getFullYear()} React-Fluxible-Webpack-Boilerplate </p>
    </footer>
  );
};

export default Footer;