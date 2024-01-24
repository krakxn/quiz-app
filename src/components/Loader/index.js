import React from 'react'; // eslint-disable-line no-unused-vars
import { Container, Message, Icon } from 'semantic-ui-react'; // eslint-disable-line no-unused-vars

const Loader = ({ title, message }) => (
  <Container>
    <Message icon size="big">
      <Icon name="circle notched" loading />
      <Message.Content>
        <Message.Header>{title || 'Just one second'}</Message.Header>
        {message || 'The content you requested is being fetched...'}
      </Message.Content>
    </Message>
  </Container>
);

export default Loader;
