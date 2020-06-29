import React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';
import Error from './Error';

const Index = () => (
  <Error>
    <App />
  </Error>
);

ReactDOM.render(<Index />, document.getElementById('app'));

export default Index;
