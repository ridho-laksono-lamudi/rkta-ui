import React from 'react';
import PropTypes from 'prop-types';

import Atom from '../Atom';
import withStyle from '../../Theme/withStyle';

const Svg = ({
  children,
  color = null,
  css,
  getColor,
  size = 24,
  viewBox = '0 0 20 20',
  ...rest
}) => (
  <Atom
    {...rest}
    element="svg"
    viewBox={viewBox}
    css={{
      fill: color ? getColor(color) : 'currentColor',
      height: `${size}px`,
      width: `${size}px`,
      ...css,
    }}
  >
    {children}
  </Atom>
);

Svg.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.node,
  css: PropTypes.shape().isRequired,
  getColor: PropTypes.func.isRequired,
  size: PropTypes.number,
  viewBox: PropTypes.string,
};
// default values provided via function parameters
Svg.displayName = 'Svg';

export default withStyle(Svg);
