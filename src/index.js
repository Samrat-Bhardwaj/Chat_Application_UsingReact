import React from 'react'; // framework import 
import ReactDom from 'react-dom'; // har element(node) on our web page will be rendered by this only

import App from './App';

ReactDom.render(<App></App>, document.getElementById('root'));