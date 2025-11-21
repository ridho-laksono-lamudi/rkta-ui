import React from 'react';
import PropTypes from 'prop-types';

import Label from './Label';
import ListItemBody from '../../List/Item/Body';
import Font from '../../../atoms/Font';
import withStyle from '../../../Theme/withStyle';

const InputBase = ({
  color = null,
  css = {},
  hasFocus,
  label = undefined,
  labelIsActive,
  outlined = false,
  placeholder = null,
  setLabelWidth,
  value = '',
  ...rest
}) => (
  <ListItemBody fitTop fitBottom>
    <Font {...rest} element="input" css={css} placeholder={label || placeholder} value={value} />
    {label && (
      <Label
        active={labelIsActive}
        color={color}
        height={css.height}
        label={label}
        outlined={outlined}
        setLabelWidth={setLabelWidth}
      />
    )}
  </ListItemBody>
);

InputBase.displayName = 'InputBase';
InputBase.propTypes = {
  css: PropTypes.shape(),
  color: PropTypes.string,
  hasFocus: PropTypes.bool.isRequired,
  label: PropTypes.node,
  labelIsActive: PropTypes.bool.isRequired,
  outlined: PropTypes.bool,
  placeholder: PropTypes.node,
  setLabelWidth: PropTypes.func.isRequired,
  value: PropTypes.node.isRequired,
};
// Default values provided via function params

export default withStyle(InputBase);
