import React from 'react';
import PropTypes from 'prop-types';

import Atom from '../Atom';
import media from '../../util/media';

const getBoxCss = (css, x, y) =>
  media({
    ...css,
    overflow: 'hidden',
    overflowY: y ? 'scroll' : undefined,
    overflowX: x ? 'scroll' : undefined,
    overflowScrolling: 'touch',
    position: 'relative',
    scrollBehavior: 'smooth',
    scrollSnapType: 'both mandatory',
    WebkitOverflowScrolling: 'touch',
  });

const ScrollBox = ({ css = null, x = false, y = false, ...rest }) => (
  <Atom {...rest} css={getBoxCss(css, x, y)} />
);

ScrollBox.displayName = 'ScrollBox';
ScrollBox.propTypes = {
  children: PropTypes.node.isRequired,
  css: PropTypes.shape(),
  x: PropTypes.bool,
  y: PropTypes.bool,
};
// default values provided via function params

export default ScrollBox;
