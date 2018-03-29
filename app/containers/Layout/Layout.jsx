import React, { Component } from 'react';

import Helmet from 'react-helmet';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { propTypes, defaultProps } from './props';

import styles from './layout.module.scss';

class Layout extends Component {
  static defaultProps = defaultProps;
  static propTypes = propTypes;
  render() {
    const {
      children,
      actions,
      meta,
      canonical,
      title,
    } = this.props;


    return (
      <div>
        <Helmet meta={meta} link={canonical} title={title} />
        <Header />
        <main className={styles.container}>
          {children}
        </main>
        <Footer />
      </div>
    );
  }
}

export default Layout;