import React from 'react';
import PropTypes from 'prop-types';

import withStyle from '../../Theme/withStyle';
import Atom from '../../atoms/Atom';
import Paper from '../../atoms/Paper';
import { getProgressStyle } from './style';

const getPaperProps = (height, rest) => {
  const nextCss = { ...rest.css, height };
  return { ...rest, css: nextCss };
};

const LinearProgress = ({ progress = null, height = 8, ...rest }) => (
  <Paper clip transparent hard {...getPaperProps(height, rest)}>
    <Atom />
    <Atom css={getProgressStyle(progress)} />
  </Paper>
);

LinearProgress.displayName = 'LinearProgress';

LinearProgress.propTypes = {
  /** Completed percents */
  progress: PropTypes.number,
  /** Bar height */
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

// default values provided via function parameters

export const SimpleLinearProgress = LinearProgress;

export default withStyle(LinearProgress);
