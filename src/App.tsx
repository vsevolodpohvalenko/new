import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {CompanyPage} from './components/company/companyPage'

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route path={'/'} render={() => <CompanyPage/>}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
