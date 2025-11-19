import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Atom from '../../../../atoms/Atom';
import Font from '../../../../atoms/Font';
import withStyle from '../../../../Theme/withStyle';

const ListItemBody = ({ children = null, text = null, caption = null, href = null, ...rest }) => (
  <Atom element="span" {...{ href, ...rest }}>
    {children || (
      <Fragment>
        {text}
        {caption && <Font caption>{caption}</Font>}
      </Fragment>
    )}
  </Atom>
);

ListItemBody.displayName = 'ListItemBody';
ListItemBody.propTypes = {
  caption: PropTypes.node,
  children: PropTypes.node,
  href: PropTypes.string,
  text: PropTypes.node,
};
// default values provided via function params

export default withStyle(ListItemBody);
