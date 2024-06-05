import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App.jsx'; 

import './index.css';
// import React from 'react';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/findCamper">
          <App />
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>
);
