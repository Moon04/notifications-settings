import React from 'react';
import { Container } from 'semantic-ui-react';

import MainHeader from './components/layout/mainHeader';
import NotificationsSettings from './features/notificationsSettings/NotificationsSettings';

import './App.css';

function App() {
  return <div className="App">
    <Container fluid>
      <MainHeader />
      <Container text>
        <NotificationsSettings />
      </Container>
    </Container>
  </div>;
}

export default App;
