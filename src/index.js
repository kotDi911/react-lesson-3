import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import './task3.css';
import Box from "./task3";
import Video from "./Video";
import {DataProvider} from "./context";
import Task1 from "./Task1";
import Task1_2 from "./Task1_2";
import Task1_2e from "./Task1_2e";
import {Task2} from "./task2";

ReactDOM.render(
    <React.StrictMode>
        {/*<Box/>*/}
        <DataProvider>
            {/*<Task1/>*/}
            {/*<Task1_2/>*/}
            <Task1_2e/>
            {/*<Task2/>*/}
        </DataProvider>
        {/*<Video/>*/}
    </React.StrictMode>,
    document.getElementById('root')
);

