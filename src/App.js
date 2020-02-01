import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch,Redirect} from "react-router-dom"
import  Popular from './page/popular/popular'
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {

  return (
    <div className='App'>
      <Header/>
      <BrowserRouter>
        <Switch>{/*只匹配以下其中一个*/}
          <Route path='/' component={Popular}></Route>
          <Route path='/Battle' component={Popular}></Route>
          <Redirect to="/"/>
        </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
