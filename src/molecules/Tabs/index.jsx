import React, { Children, cloneElement, Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import Paper from '../../atoms/Paper';
import withStyle from '../../Theme/withStyle';

import Indicator from './Indicator';

class Tabs extends Component {
  state = {
    activeTab: 0,
    domNode: null,
  };

  get activeTab() {
    return get(this.props, 'activeTab', this.state.activeTab);
  }

  get children() {
    const { children, color = 'text', noIndicator = false, onChange = () => {} } = this.props;
    const { activeTab } = this;
    const childrenArray = Children.toArray(children);
    return childrenArray.map((child, index) => {
      const isActive = index === activeTab;
      const nextProps = {
        hardLeft: noIndicator && index > 0 ? true : undefined,
        hardRight: noIndicator && index < childrenArray.length - 1 ? true : undefined,
        hardBottom: noIndicator ? undefined : true,
        onClick: event => {
          this.setState({ activeTab: index });
          onChange(index);
          const { onClick } = child.props;
          if (typeof onClick === 'function') onClick(event);
        },
      };
      if (isActive) {
        Object.assign(nextProps, {
          color: child.props.color || color,
        });
      }
      return cloneElement(child, nextProps);
    });
  }

  ref = domNode => this.setState({ domNode });

  render() {
    const {
      activeTab,
      center,
      children,
      color,
      indicatorHeight,
      getColor,
      noIndicator,
      reverse,
      right,
      ...rest
    } = this.props;
    const { domNode } = this.state;
    return (
      <Paper {...rest} atomRef={this.ref}>
        {this.children}
        {!noIndicator && (
          <Indicator
            activeTab={this.activeTab}
            color={getColor(color)}
            height={indicatorHeight}
            domNode={domNode}
          />
        )}
      </Paper>
    );
  }
}

Tabs.propTypes = {
  // # of the active tab
  activeTab: PropTypes.number, // eslint-disable-line react/require-default-props
  // Align tabs to center
  center: PropTypes.bool,
  // Tabs
  children: PropTypes.node.isRequired,
  // Active tab color
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // Privider utility
  getColor: PropTypes.func.isRequired,
  // Indicator height
  indicatorHeight: PropTypes.number,
  // Do not render indicator
  noIndicator: PropTypes.bool,
  // Tab click handler
  onChange: PropTypes.func,
  // Reverse tabs
  reverse: PropTypes.bool,
  // Align tabs to end
  right: PropTypes.bool,
};

// Default values are provided by local destructuring in getters/render

Tabs.displayName = 'Tabs';

export const SimpleTabs = Tabs;

export default withStyle(Tabs);
