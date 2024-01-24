import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App'; // eslint-disable-line no-unused-vars
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorkerRegistration.register();
