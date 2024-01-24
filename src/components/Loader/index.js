import React from 'react';
import { Container, Message, Icon } from 'semantic-ui-react';

const Loader = ({ title, message }) => (
  <Container>
    <Message icon size="big">
      <Icon name="circle notched" loading />
      <Message.Content>
        <Message.Header>{title ? title : 'Just one second'}</Message.Header>
        {message ? message : 'The content you requested is being fetched...'}
      </Message.Content>
    </Message>
  </Container>
);

export default Loader;
