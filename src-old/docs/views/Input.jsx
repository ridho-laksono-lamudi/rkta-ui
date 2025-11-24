import React, { Fragment } from 'react';

import { Divider, Header, Addon, Input, Paper } from '../../../lib';

import Archive from '../../../lib/entypo/Archive';
import Cake from '../../../lib/entypo/Cake';
import Wallet from '../../../lib/entypo/Wallet';

const paperStyle = { padding: '40px' };

const Typography = () => (
  <Fragment>
    <Header level={1}>Input</Header>
    <Paper paper2 style={paperStyle}>
      <Header h6>Normal</Header>
      <Divider />
      <Input
        // defaultValue="test input"
        color="secondary"
        label="Label"
        placeholder="A placeholder"
        outlined
      />
    </Paper>
    <Divider invisible />
    <Paper paper2 style={paperStyle}>
      <Header h6>Normal</Header>
      <Divider />
      <Input
        append={
          <Addon>
            <Archive />
          </Addon>
        }
        defaultValue="test input"
        color="secondary"
        placeholder="A placeholder"
        outlined
      />
    </Paper>
  </Fragment>
);

export default Typography;
