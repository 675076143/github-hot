import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch,Redirect} from "react-router-dom"
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import routes from "./config/router";
function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Header/>
        <Switch>{/*只匹配以下其中一个*/}
          {routes.map(v=>(
            <Route path={v.path} exact={v.exact} component={v.component}/>
          ))}

          <Redirect to='/' />
        </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
