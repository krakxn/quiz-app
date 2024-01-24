import React, { useState } from 'react'; // eslint-disable-line no-unused-vars
import { Menu, Button } from 'semantic-ui-react'; // eslint-disable-line no-unused-vars

const Header = () => {
  const [promptEvent, setPromptEvent] = useState(null);
  const [appAccepted, setAppAccepted] = useState(false);

  let isAppInstalled = false;

  if (window.matchMedia('(display-mode: standalone)').matches || appAccepted) {
    isAppInstalled = true;
  }

  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    setPromptEvent(e);
  });

  const installApp = () => {
    promptEvent.prompt();
    promptEvent.userChoice.then(result => {
      if (result.outcome === 'accepted') {
        setAppAccepted(true);
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
    });
  };

  return (
    <Menu stackable inverted>
      <Menu.Item header position="left">
        <h1>QuizQuest: The Definite Trivia</h1>
      </Menu.Item>
      {promptEvent && !isAppInstalled && (
        <Menu.Item position="right">
          <Button
            color="black"
            icon="download"
            labelPosition="left"
            content="Install Application"
            onClick={installApp}
          />
        </Menu.Item>
      )}
    </Menu>
  );
};

export default Header;
