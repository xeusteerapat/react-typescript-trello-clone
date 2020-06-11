import React from 'react';
import ReactDOM from 'react-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend as Backend } from 'react-dnd-html5-backend';
import './index.css';
import App from './components/App';
import AppStateProvider from './context/AppStateContext';

ReactDOM.render(
  <DndProvider backend={Backend}>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </DndProvider>,
  document.getElementById('root')
);
