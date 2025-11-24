import React, { Fragment } from 'react';

import { Divider, Bage, Header } from '../../../lib';

const Bages = () => (
  <Fragment>
    <Header level={1}>Bage</Header>
    <Bage muted primary>
      A
    </Bage>
    <Bage body2 disabled primary>
      A Bage
    </Bage>
    <Divider />
    <Bage h6 primary>
      A Bage
    </Bage>
    <Bage h1 secondary color="paper" uppercase hardRight fitRight>
      A Bage
    </Bage>
    <Bage h1 uppercase hardLeft fitLeft primary>
      A Bage
    </Bage>
    <Bage subtitle1 primary1>
      A Bage
    </Bage>
    <Bage subtitle1 primary2>
      A Bage
    </Bage>
    <Divider />
    <Bage overline uppercase color6 noselect>
      A Bage
    </Bage>
  </Fragment>
);

export default Bages;
