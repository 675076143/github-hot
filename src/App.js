import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch,Redirect} from "react-router-dom"
import  Popular from './page/popular/popular'
import Battle from "./page/battle/battle";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
        <Switch>{/*只匹配以下其中一个*/}
          <Route path='/' exact component={Popular} />
          <Route path='/Battle' exact component={Battle} />
          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
