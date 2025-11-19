import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Context from '../../Theme/Context';
import Atom from '../Atom';

import match from '../../util/matchMedia';

const mediaToString = mediaArray => mediaArray.join(', ');

class Visible extends Component {
  isMounted = false;

  componentDidMount() {
    this.isMounted = true;
    this.forceUpdate();
    window.addEventListener('resize', this.handleResize, { passive: true });
  }

  componentWillUnmount() {
    this.isMounted = false;
    window.removeEventListener('resize', this.handleResize, true);
  }

  get clientQueries() {
    const { children, element, ...queryNames } = this.props;
    return Object.keys(queryNames).map(name => this.context.theme.mediaQueries[name]);
  }

  get serverQueries() {
    return this.clientQueries.map(query => `not ${query}`);
  }

  get clientContent() {
    const mq = mediaToString(this.clientQueries);
    const { children = null } = this.props;
    return match(mq) ? children : null;
  }

  get serverContent() {
    const { children = null, element = 'div' } = this.props;
    const mq = `@media ${mediaToString(this.serverQueries)}`;
    return (
      <Atom css={{ [mq]: { display: 'none' } }} element={element}>
        {children}
      </Atom>
    );
  }

  handleResize = () => {
    if (this.isMounted) this.forceUpdate();
  };

  render() {
    return this.isMounted ? this.clientContent : this.serverContent;
  }
}

Visible.propTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
};
// default values are provided via destructuring in getters
Visible.displayName = 'Visible';
Visible.contextType = Context;

export default Visible;
