import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import Atom from '../Atom';
import withStyle from '../../Theme/withStyle';

const getFontProps = (color, getColor, rest) => {
  const nextCss = { ...rest.css, color: getColor(color) };
  return { ...rest, css: nextCss };
};

const Font = forwardRef(({ children = null, getColor, color = '', ...rest }, ref) => (
  <Atom element="span" atomRef={ref} {...getFontProps(color, getColor, rest)}>
    {children}
  </Atom>
));

Font.displayName = 'Font';
// @ts-ignore - React's ForwardRefExoticComponent.propTypes is marked deprecated in
// TypeScript types, but runtime PropTypes validation is still used in this project.
Font.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  getColor: PropTypes.func.isRequired,
};
// Default values provided via function params

export default withStyle(Font);
