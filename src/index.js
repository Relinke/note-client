import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import SlideBar from "./SlideBar";

ReactDOM.render(
    <SlideBar/>,
    document.getElementById('root')
);
registerServiceWorker();
