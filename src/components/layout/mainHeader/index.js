import React from 'react';
import { Segment, Header, Icon } from 'semantic-ui-react';

const MainHeader = () => (
  <Segment clearing>
    <Header as='h2'>
      <Icon name='settings' />
      <Header.Content>
        Notifications Settings
        <Header.Subheader>Manage your notifications preferences</Header.Subheader>
      </Header.Content>
    </Header>
  </Segment>
);

export default MainHeader;
