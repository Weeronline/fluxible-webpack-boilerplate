// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './header.module.scss';

class Header extends Component {
  handleLogoClick = (e) => {
    e.preventDefault();
  }
  render() {
    return (
      <header className={styles.header}>
        <a onClick={this.handleLogoClick}>
          <h1 className={styles.logo}>
            Your App Logo
          </h1>
        </a>
      </header>
    );
  }
}

export default Header;