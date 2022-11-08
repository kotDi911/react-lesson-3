import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import './task3.css';
import {App, DataProvider} from "./task2";
import Box from "./task3";
import Video from "./Video";


ReactDOM.render(
    <React.StrictMode>
        <Box/>
        <DataProvider>
            <App/>
        </DataProvider>
        <Video/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

