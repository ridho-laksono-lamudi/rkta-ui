import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import Font from '../Font';
import withStyle from '../../Theme/withStyle';
import shadows from './shadows';

const modifyProps = ({ css, rize, size, theme, ...props }) => {
  const nextCss = {};
  if (rize && rize < shadows.length - 1) {
    Object.assign(nextCss, {
      boxShadow: shadows[rize],
    });
  }
  if (size) {
    const cssSize = `${size}px`;
    Object.assign(nextCss, { width: cssSize, height: cssSize });
  }
  return { element: 'div', ...props, css: { ...nextCss, ...css } };
};

const Paper = forwardRef(({ rize = 0, size = 0, ...props }, ref) => (
  <Font atomRef={ref} {...modifyProps({ rize, size, ...props })} />
));

Paper.displayName = 'Paper';
// @ts-ignore - React's ForwardRefExoticComponent.propTypes is marked deprecated in
// TypeScript types, but runtime PropTypes validation is still used in this project.
Paper.propTypes = {
  rize: PropTypes.number,
  size: PropTypes.number,
};
// default values set via function params

export default withStyle(Paper);
