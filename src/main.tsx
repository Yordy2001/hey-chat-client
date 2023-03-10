import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import App from './App'
import { SocketContext, socket } from './context/socket';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <SocketContext.Provider value={socket}>
        <App />
      </SocketContext.Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
