import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DRButton } from '../.';

const App = () => {
  return (
    <div>
      <DRButton />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
