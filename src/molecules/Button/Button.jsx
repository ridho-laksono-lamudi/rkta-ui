import React, { Children, Component, createRef } from 'react';
import PropTypes from 'prop-types';

import Context from '../../Theme/Context';
import withStyle from '../../Theme/withStyle';
import Paper from '../../atoms/Paper';
import Ripple from '../../fx/Ripple/Ripple';

import Spinner from '../Spinner';
import wrapChild from './wrapChild';

class Button extends Component {
  state = {
    hasHighlight: false,
  };

  contentRef = createRef();

  rippleRef = createRef();

  get css() {
    const { css, round } = this.props;
    if (round) {
      const { width, height, minHeight, ...rest } = css;
      return {
        ...rest,
        paddingTop: 0,
        paddingLeft: 0,
        paddingBottom: 0,
        paddingRight: 0,
      };
    }
    return css;
  }

  get content() {
    const { busy, children } = this.props;
    return Children.map(children, wrapChild(busy));
  }

  handleBlur = () => {
    const { current } = this.rippleRef;
    if (current) current.removeFocus();
  };

  handleFocus = event => {
    const { current } = this.rippleRef;
    if (current) current.setFocus(event, this.contentRef);
  };

  handleMouseEnter = () => {
    this.setState({ hasHighlight: !this.context.touchDetected });
  };

  handleMouseLeave = () => this.setState({ hasHighlight: false });

  handleDown = event => {
    const { current } = this.rippleRef;
    if (current) current.pushEvent(event);
    this.props.onPointerDown(event);
  };

  handleUp = event => {
    const { current } = this.rippleRef;
    if (current) current.release(event);
    this.props.onPointerUp(event);
  };

  render() {
    const {
      autoHeight,
      blockLevel,
      busy,
      children,
      css,
      color,
      element,
      fitAll,
      fitLeft,
      fitRight,
      large,
      noRipple,
      onPointerDown,
      onPointerUp,
      outline,
      round,
      small,
      spinnerProps,
      vertical,
      ...rest
    } = this.props;

    const { hasFocus, hasHighlight } = this.state;
    // Provide local defaults for commonly optional props previously defined in defaultProps
    const restProps = {
      onPointerDown: onPointerDown || (() => {}),
      onPointerUp: onPointerUp || (() => {}),
      ...rest,
    };
    return (
      <Paper
        button
        element={element}
        tabIndex={0}
        atomRef={this.contentRef}
        color={color}
        {...restProps}
        css={this.css}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onPointerDown={this.handleDown}
        onPointerUp={this.handleUp}
        round={round}
      >
        {!noRipple && (
          <Ripple
            {...restProps}
            color={color}
            highlight={hasHighlight}
            forceShow={hasHighlight}
            focus={hasFocus}
            ref={this.rippleRef}
          />
        )}
        {this.content}
        {busy && <Spinner blockLevel color={color} {...spinnerProps} />}
      </Paper>
    );
  }
}

Button.displayName = 'Button';
Button.contextType = Context;

Button.propTypes = {
  /** height: auto */
  autoHeight: PropTypes.bool,
  /** display: block */
  blockLevel: PropTypes.bool,
  /** Enables spinner state */
  busy: PropTypes.bool,
  /** Button content */
  children: PropTypes.node.isRequired,
  /** Sets color for texts and borders */
  color: PropTypes.string,
  /** Custom styling */
  css: PropTypes.shape(),
  /** Change dom element */
  element: PropTypes.node,
  /** Disable paddings */
  fitAll: PropTypes.bool,
  /** Disable left padding  */
  fitLeft: PropTypes.bool,
  /** Disable right padding  */
  fitRight: PropTypes.bool,
  /** Large size  */
  large: PropTypes.bool,
  /** Disable ripple effect  */
  noRipple: PropTypes.bool,
  onPointerDown: PropTypes.func,
  onPointerUp: PropTypes.func,
  /** Otlined mode  */
  outline: PropTypes.bool,
  /** Rounds button  */
  round: PropTypes.bool,
  /** Required   */
  size(props, propName) {
    if (props.round === true && props[propName] === undefined) {
      return typeof props[propName] === 'number'
        ? new Error('Please provide a size!')
        : new Error('Size should be a number');
    }
    return undefined;
  },
  /** Small size  */
  small: PropTypes.bool,
  /** Spinner props  */
  spinnerProps: PropTypes.shape(),
  /** Render children vertically  */
  vertical: PropTypes.bool,
};

// Default values for class props are now handled by local destructuring where applicable or fallbacks

export const SimpleButton = Button;

export default withStyle(Button);
