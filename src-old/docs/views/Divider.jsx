import React, { Fragment } from 'react';

import { Divider, Header, Paper } from '../../../lib';

const Typography = () => (
  <Fragment>
    <Header level={1}>Divider</Header>
    <Paper paper2 css={{ padding: '20px' }}>
      <Header h6>Default</Header>
      <Divider />
    </Paper>
    <Divider invisible />
    <Paper paper2 css={{ padding: '20px' }}>
      <Header h6>Dotted</Header>
      <Divider dotted />
    </Paper>
    <Divider invisible />
    <Paper paper2 css={{ padding: '20px' }}>
      <Header h6>Invisible</Header>
      <Paper>Section 1</Paper>
      <Divider invisible />
      <Paper>Section 2</Paper>
    </Paper>
  </Fragment>
);

export default Typography;
