import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from './routes'
import Menu from './components/Menu'
import { Wrappe } from './styled'

const App: React.FC = () => {
  return (
    <BrowserRouter >
      <Wrappe>
        <Menu />
        <Routes />
      </Wrappe>
    </BrowserRouter>
  );
}

export default App;
