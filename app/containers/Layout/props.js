import PropTypes from 'prop-types';

export const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.shape({})]),
  locale: PropTypes.string,
  domain: PropTypes.string,
  helmetParams: PropTypes.shape({
    meta: PropTypes.arrayOf(PropTypes.object),
    canonical: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
  }),
};

export const defaultProps = {
  locale: 'en',
  domain: 'yourapp.io',
  helmetParams: {
    meta: [],
    canonical: [],
    title: ''
  },
};