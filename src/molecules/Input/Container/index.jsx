import React from 'react';
import PropTypes from 'prop-types';

import { ListItem } from '../../List';
import InputOutline from '../Outline';

const InputContainer = ({
  children,
  hasAddons = false,
  labelIsActive,
  labelWidth,
  outlined,
  ...rest
}) => {
  const itemElement = hasAddons ? undefined : 'label';
  if (outlined) {
    return (
      <InputOutline {...rest} labelIsActive={labelIsActive} labelWidth={labelWidth}>
        <ListItem css={{ margin: '-1px' }} element={itemElement} transparent>
          {children}
        </ListItem>
      </InputOutline>
    );
  }
  return (
    <ListItem element={itemElement} {...rest}>
      {children}
    </ListItem>
  );
};

InputContainer.propTypes = {
  children: PropTypes.node.isRequired,
  hasAddons: PropTypes.bool,
  labelIsActive: PropTypes.bool.isRequired,
  labelWidth: PropTypes.number.isRequired,
  outlined: PropTypes.bool.isRequired,
};

export default InputContainer;
