import React from 'react';
import PropTypes from 'prop-types';

import Atom from '../Atom';
import withStyle from '../../Theme/withStyle';

const Addon = ({ children, fitAll = false, fitLeft = false, fitRight = false, ...props }) => (
  <Atom element="span" {...{ fitAll, fitLeft, fitRight, ...props }}>
    {children}
  </Atom>
);

Addon.displayName = 'Addon';
Addon.propTypes = {
  /** React node */
  children: PropTypes.node.isRequired,
  /** Reset Paddings */
  fitAll: PropTypes.bool,
  /** Reset Left Padding */
  fitLeft: PropTypes.bool,
  /** Reset Right Padding */
  fitRight: PropTypes.bool,
};
// Default values are provided via function parameters

export const RawAddon = Addon;

export default withStyle(Addon);
