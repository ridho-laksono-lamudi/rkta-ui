import React, { forwardRef } from 'react';

import Context from './Context';
import defaultRenderrer from './defaultRenderrer';
import invariant from '../util/invariant';

const modifyStyles = (context, { children, ...props }, element, ref) => {
  const { defaultStyle, ...styles } = context.theme[element];

  // const nextProps = {};
  // const nextStyle = { ...defaultStyle };

  // const keys = Object.keys(props);

  // for (let i = 0; i < keys.length; i += 1) {
  //   const key = keys[i];
  //   const value = props[key];
  //   if (value === true && key in styles) Object.assign(nextStyle, styles[key]);
  //   else if (!(key in styles)) nextProps[key] = value;
  // }

  const { nextStyle, nextProps } = Object.keys(props).reduce(
    (acc, key) => {
      const value = props[key];
      if (value === true && key in styles) Object.assign(acc.nextStyle, styles[key]);
      else if (!(key in styles)) Object.assign(acc.nextProps, { [key]: value });
      return acc;
    },
    {
      nextProps: {},
      nextStyle: { ...defaultStyle },
    },
  );
  const css = { ...nextStyle, ...props.css };
  return { ...nextProps, ...context, children, css, ref };
};

const pickProps = (context, props, elementName, ref) => {
  if (elementName in context.theme) return modifyStyles(context, props, elementName, ref);
  return { ...props, ...context, ref };
};

const withStyle = (Element, key) => {
  const { displayName } = Element;
  const WithStyle = forwardRef((props, ref) => (
    <Context.Consumer>
      {({ modifyElement, providerIsMissing, ...context }) => {
        invariant(!providerIsMissing, `Please use the Provider. Component: ${key || displayName}`);
        const render = modifyElement || defaultRenderrer;
        return render(Element, pickProps(context, props, key || displayName, ref));
      }}
    </Context.Consumer>
  ));
  WithStyle.contextType = Context;
  WithStyle.displayName = displayName;
  Element.displayName = `Styled ${displayName}`; // eslint-disable-line no-param-reassign
  return WithStyle;
};

export default withStyle;
