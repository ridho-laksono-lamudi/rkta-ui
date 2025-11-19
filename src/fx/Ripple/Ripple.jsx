import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Atom from '../../atoms/Atom';
import withStyle from '../../Theme/withStyle';

import Wave from './Wave';

const getBounds = ({ target }) => {
  const { clientHeight, clientWidth } = target;
  const { top, left } = target.getBoundingClientRect();
  return {
    height: clientHeight,
    width: clientWidth,
    top,
    left,
  };
};

class Ripple extends Component {
  state = {
    outline: null,
    waves: [],
  };

  componentDidUpdate() {
    window.addEventListener('mouseup', this.release);
    window.addEventListener('pointercancel', this.release);
  }

  componentWillUnmount() {
    window.removeEventListener('mouseup', this.release);
    window.removeEventListener('pointercancel', this.release);
  }

  get backgroundColor() {
    const { color = null, getColor } = this.props;
    return getColor(color);
  }

  get outline() {
    const { outline, waves } = this.state;
    if (!outline || waves.length) return null;
    return <Wave {...outline} />;
  }

  get waves() {
    return this.state.waves.map(({ created, released, ...wave }) => (
      <Wave
        key={created}
        {...wave}
        onDissolve={this.makeTransitionHandler(created)}
        released={released}
      />
    ));
  }

  makeTransitionHandler = created => () =>
    this.setState(({ waves }) => ({
      waves: waves.filter(wave => wave.created !== created),
    }));

  pushEvent = event => {
    const { left, top, width, height } = getBounds(event);
    const size = (width ** 2 + height ** 2) ** 0.5 * 2;
    const halfSize = size / 2;
    this.pushWawe({
      created: performance.now(),
      css: {
        backgroundColor: this.backgroundColor,
        left: `${event.clientX - left - halfSize}px`,
        top: `${event.clientY - top - halfSize}px`,
        zIndex: 2,
      },
      released: false,
      size,
    });
  };

  release = () => {
    this.setState(({ waves }) => ({
      waves: waves.map(wave => ({
        ...wave,
        released: true,
      })),
    }));
  };

  removeFocus = () => this.setState({ outline: null });

  setFocus = (event, { current }) => {
    if (!current) return;
    const { width: innerWidth, height: innerHeight } = current.getBoundingClientRect();
    const { width, height } = getBounds(event);
    const size = Math.max(innerHeight, innerWidth, 32);
    const halfSize = size / 2;

    this.setState(({ waves }) => {
      if (waves.length) return null;
      return {
        outline: {
          css: {
            backgroundColor: this.backgroundColor,
            left: `${width / 2 - halfSize}px`,
            top: `${height / 2 - halfSize}px`,
            transform: `translate(-${size}px, -${size}px)`,
            zIndex: 2,
          },
          size,
        },
      };
    });
  };

  pushWawe(wawe) {
    this.setState(({ waves }) => ({
      waves: waves.concat(wawe),
    }));
  }

  render() {
    const { outline, waves } = this.state;
    const { forceShow = false } = this.props;
    if (!forceShow && !outline && !waves.length) return null;
    return (
      <Atom
        element="span"
        css={{
          background: 'none',
          borderRadius: 'inherit',
          display: 'block',
          overflow: 'hidden',
          pointerEvents: 'none',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <Atom
          element="span"
          css={{
            backgroundColor: this.backgroundColor,
            ...this.props.css,
          }}
        />
        {this.waves}
        {this.outline}
      </Atom>
    );
  }
}

Ripple.displayName = 'Ripple';
Ripple.propTypes = {
  color: PropTypes.string,
  getColor: PropTypes.func.isRequired,
  css: PropTypes.shape().isRequired,
  forceShow: PropTypes.bool,
};
// Default values for function props are provided via destructuring (see getters/render)

export default withStyle(Ripple);
