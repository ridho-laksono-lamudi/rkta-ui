/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from '@emotion/react';

const Atom = ({
  css,
  element: Element,
  getColor, // eslint-disable-line react/prop-types
  location, // eslint-disable-line react/prop-types
  theme, // eslint-disable-line react/prop-types
  changeTheme, // eslint-disable-line react/prop-types
  atomRef,
  touchDetected, // eslint-disable-line react/prop-types
  ...rest
}) => <Element {...rest} css={css} ref={atomRef} />;

Atom.propTypes = {
  atomRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({})]),
  css: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.func]),
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

Atom.defaultProps = {
  atomRef: null,
  css: null,
  element: 'div',
};
Atom.displayName = 'Atom';

export const RawAtom = Atom;

export default Atom;
