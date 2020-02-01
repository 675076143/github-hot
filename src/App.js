import React from 'react';
import './App.css';
import  Main from './page/main/main'

function App() {

  return (
    <div className="App">
      <Main/>
      <footer style={{backgroundColor:"#f6f6f6",padding:'20px'}}>
        <h4 style={{color:"gray",textAlign:"center"}}>作业：显示github热门项目</h4>
      </footer>
    </div>
  );
}

export default App;
