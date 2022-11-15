import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';
import './styles/task3.css';
import Box from "./component/task3/task3";
import Video from "./component/task3/Video";
import {DataProvider} from "./context/context";
import Task1 from "./component/task1/Task1";
import Task1_2 from "./component/task1/Task1_2";
import Task1_2e from "./component/task1/Task1_2e";
import {Task2} from "./component/task2/task2";

ReactDOM.render(
    <React.StrictMode>
        {/*<Box/>*/}
        <DataProvider>
            {/*<Task1/>*/}
            {/*<Task1_2/>*/}
            {/*<Task1_2e/>*/}
            <Task2/>
        </DataProvider>
        {/*<Video/>*/}
    </React.StrictMode>,
    document.getElementById('root')
);

