import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Homepage from './components/Homepage'

function App () {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route path="/" exact component={ Homepage } />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
