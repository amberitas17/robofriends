import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello';
import { register as registerServiceWorker } from './registerServiceWorker';
ReactDOM.render(<Hello />, document.getElementById('root'));
registerServiceWorker();
