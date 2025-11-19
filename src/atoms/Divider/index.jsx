import React from 'react';
import PropTypes from 'prop-types';

import Atom from '../Atom';
import withStyle from '../../Theme/withStyle';

const Divider = ({
  baseline = false,
  dotted = false,
  inset = false,
  invisible = false,
  ...rest
}) => <Atom element="hr" {...{ baseline, dotted, inset, invisible, ...rest }} />;
Divider.displayName = 'Divider';

Divider.propTypes = {
  /** Resets margins */
  baseline: PropTypes.bool,
  /** Adds dotted style */
  dotted: PropTypes.bool,
  /** Shifts to the right */
  inset: PropTypes.bool,
  /** Hide and keep the spase */
  invisible: PropTypes.bool,
};
// default values are provided via function parameters

export const StaticDivider = Divider;

export default withStyle(Divider);
