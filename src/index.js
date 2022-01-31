// learned that I need to use the command "npm install" in order to initiate things
// Also used the following command to download dependencies from the terminal
// npm install antd @ant-design/icons react-redux @reduxjs/toolkit axios chart.js html-react-parser millify moment react-chartjs-2  
// needed to run "npm install -S react-router-dom"
// there is something wrong with the commened out code in the LineChart.jsx file

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import store from './app/store'
import 'antd/dist/antd.css';

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    document.getElementById('root'));

export default App;