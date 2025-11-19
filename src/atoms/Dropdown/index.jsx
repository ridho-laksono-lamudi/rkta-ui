import React, { useRef } from 'react';
import { createPortal } from 'react-dom';

import PropTypes from 'prop-types';
import { useClickAway } from 'react-use';
import Paper from '../Paper';

import getBodyNode from '../../util/getBodyNode';
import getCss from './getCss';
import usePositionBinding from './usePositionBinding';

import {
  DROPDOWN_STATE_DISABLED,
  DROPDOWN_STATE_ENTERING,
  DROPDOWN_STATE_READY,
  DROPDOWN_STATE_EXITING,
  DROPDOWN_PALCEMENT_BL,
} from './constants';

const knownStates = [
  DROPDOWN_STATE_DISABLED,
  DROPDOWN_STATE_ENTERING,
  DROPDOWN_STATE_READY,
  DROPDOWN_STATE_EXITING,
];

const Dropdown = ({
  bindTo,
  children,
  onExit = undefined,
  onBeginExit = undefined,
  onReadyState = undefined,
  placement = DROPDOWN_PALCEMENT_BL,
  state = DROPDOWN_STATE_DISABLED,
  ...rest
}) => {
  const bodyNode = getBodyNode();
  const dropdownRef = useRef(null);
  const dynamicCss = usePositionBinding(bindTo, placement);

  function handleAnimationEnd() {
    if (state === DROPDOWN_STATE_EXITING) onExit();
    else onReadyState();
  }
  const awayHandler = state === DROPDOWN_STATE_READY ? onBeginExit : () => {};
  useClickAway(dropdownRef, awayHandler, ['click']);
  if (state === DROPDOWN_STATE_DISABLED) return null;

  const output = (
    <Paper
      rize={1}
      {...rest}
      atomRef={dropdownRef}
      css={{ ...getCss(state), ...dynamicCss }}
      // eslint-disable-next-line react/jsx-no-bind
      onAnimationEnd={handleAnimationEnd}
    >
      {children}
    </Paper>
  );
  return createPortal(output, bodyNode);
};

Dropdown.displayName = 'Dropdown';
Dropdown.propTypes = {
  bindTo: PropTypes.shape().isRequired,
  children: PropTypes.node.isRequired,
  onBeginExit: PropTypes.func,
  onExit: PropTypes.func,
  onReadyState: PropTypes.func,
  placement: PropTypes.string,
  state: PropTypes.oneOf(knownStates),
};
// default values are provided via function parameters

export default Dropdown;
