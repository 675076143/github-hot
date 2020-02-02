import React,{Component} from "react";
import './battle.css'
export default class Battle extends Component{
  render() {
    return(
      <div className='battle'>
        <h1>Instructions</h1>
        <div className='battle-options'>
          <p>Enter two Github users</p>
          <div>
            <i className="fa fa-users fa-5x" style={{color:"rgb(253,190,155)"}}></i>
          </div>
        </div>
        <div className='battle-options'>
          <p>Enter two Github users</p>
          <div>
            <i className="fa fa-fighter-jet fa-5x" style={{color:"gray"}}></i>
          </div>
        </div>
        <div className='battle-options'>
          <p>Enter two Github users</p>
          <div>
            <i className="fa fa-users fa-5x" style={{color:"rgb(253,231,0)"}}></i>
          </div>
        </div>
        
        <h1>Players</h1>
        <div className='battle-options'>
          <p>Player One</p>
          <div>
            <input type="text" placeholder='github username'/>
            <input type="submit" value='SUBMIT'/>
          </div>
        </div>
        <div className='battle-options'>
          <p>Player Two</p>
          <div>
            <input type="text" placeholder='github username'/>
            <input type="submit" value='SUBMIT'/>
          </div>
        </div>
      </div>
    )
  }
}