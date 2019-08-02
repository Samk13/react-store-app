import React from 'react';
import ReactDOM from 'react-dom';
import Store from './Components/Store';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProductProvider } from './img/Context';

import './styles.css';

function App() {
  return (
    <div className="App">
    
      <Store />
    
      
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <ProductProvider>
    <Router>
      <App />
    </Router>
  </ProductProvider>,
  rootElement
);
