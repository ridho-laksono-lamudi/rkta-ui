import React, { Fragment } from 'react';

import {
  Divider,
  Header,
  List,
  Addon,
  ListItemBody,
  ListButton,
  ListItem,
  Paper,
} from '../../../lib';

import Archive from '../../../lib/entypo/Archive';
import Cake from '../../../lib/entypo/Cake';
import Wallet from '../../../lib/entypo/Wallet';

const listStyle = { margin: 'auto', maxWidth: '320px' };
const paperStyle = { padding: '40px' };

const Typography = () => (
  <Fragment>
    <Header level={1}>List</Header>
    <Paper paper2 css={paperStyle}>
      <Header h6>Normal</Header>
      <ListItem small>Test</ListItem>
      <Divider />
      <List rize={1} css={listStyle}>
        <ListItem>
          <Addon>
            <Wallet />
          </Addon>
          <ListItemBody>Item 1</ListItemBody>
        </ListItem>
        <Divider inset dotted />
        <ListItem>
          <Addon>
            <Archive />
          </Addon>
          <ListItemBody text="text" caption="caption" />
          <Addon>
            <Cake size={16} color={13} />
          </Addon>
        </ListItem>
        <ListButton>
          <Addon>
            <Wallet />
          </Addon>
          <ListItemBody text="text" caption="caption" />
        </ListButton>
      </List>
    </Paper>
  </Fragment>
);

export default Typography;
