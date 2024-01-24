import React from 'react'; // eslint-disable-line no-unused-vars
import { Container, Segment, Header, Icon } from 'semantic-ui-react'; // eslint-disable-line no-unused-vars

const Offline = () => {
  window.addEventListener('online', () => window.location.reload());

  return (
    <Container>
      <Segment placeholder>
        <Header icon>
          <Icon name="unlink" />
          <h1>Offline</h1>
          <p>
            Oh no! There is no Internet connection... once back online, to be refreshed automatically!  {' '}
            <span role="img" aria-label="signal">
              📶
            </span>
          </p>
        </Header>
      </Segment>
    </Container>
  );
};

export default Offline;
