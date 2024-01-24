import React, { Fragment } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types'; // eslint-disable-line no-unused-vars

import Header from '../Header'; // eslint-disable-line no-unused-vars

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
