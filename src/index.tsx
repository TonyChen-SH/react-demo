import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
// import App from './App';
// import UserAddPage from './pages/UserAdd';

import registerServiceWorker from './registerServiceWorker';
import './index.css';
import HomeLayout from "./layouts/HomeLayout";

ReactDOM.render(
    <BrowserRouter>
        <HomeLayout/>
    </BrowserRouter>,
    document.getElementById('root') as HTMLElement
)
;
registerServiceWorker();
