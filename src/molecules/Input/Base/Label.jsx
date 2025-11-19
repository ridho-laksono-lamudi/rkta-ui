import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Font from '../../../atoms/Font';

class Label extends Component {
  ref = node => this.props.setLabelWidth(node.offsetWidth);

  render() {
    const { active, color, height, outlined } = this.props;
    return (
      <Font
        caption={active}
        color={color}
        css={{
          lineHeight: active ? '20px' : height,
          pointerEvents: 'none',
          position: 'absolute',
          top: 0,
          transition: `
            font-size .24s ease,
            line-height .24s ease,
            transform .24s ease
          `,
          transform: active && outlined ? 'translateY(-10px)' : '',
          willChange: 'font-size, line-height, transform',
        }}
        atomRef={this.ref}
      >
        Label
      </Font>
    );
  }
}

Label.propTypes = {
  active: PropTypes.bool.isRequired,
  color: PropTypes.string,
  height: PropTypes.string.isRequired,
  outlined: PropTypes.bool.isRequired,
  setLabelWidth: PropTypes.func.isRequired,
};
// default values provided inline during rendering via font color default

export default Label;
