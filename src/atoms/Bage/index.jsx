import React from 'react';
import PropTypes from 'prop-types';

import Paper from '../Paper';
import withStyle from '../../Theme/withStyle';

const Bage = ({ fitAll = false, fitLeft = false, fitRight = false, ...rest }) => (
  <Paper {...{ fitAll, fitLeft, fitRight, ...rest }} rounded overline nowrap />
);

Bage.displayName = 'Bage';
Bage.propTypes = {
  /** Reset Margins */
  fitAll: PropTypes.bool,
  /** Reset Left Margin */
  fitLeft: PropTypes.bool,
  /** Reset Right Margin */
  fitRight: PropTypes.bool,
};
// Default values are provided via function parameters

export const RawBage = Bage;

export default withStyle(Bage);
