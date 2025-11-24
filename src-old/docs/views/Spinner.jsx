import React, { Fragment } from 'react';

import { Bage, Spinner, Header, Divider } from '../../../lib';

const PaperView = () => (
  <Fragment>
    <Header level={1}>Spinner</Header>
    <Spinner warning />
    <Divider invisible />
    <Spinner borderWidth="2.2px" size="56px">
      <Divider invisible />
      <Bage primary>Loading</Bage>
    </Spinner>
  </Fragment>
);

export default PaperView;
