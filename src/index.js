import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DesignEditProfile from './components/designEditProfile';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div style={{textAlign:'center'}}><DesignEditProfile /></div>, document.getElementById('root'));
registerServiceWorker();
