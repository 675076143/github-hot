import React,{Component} from "react";
import './battle.css'
import {NavLink} from "react-router-dom";
export default class BattleHome extends Component{

  state = {
    user1:'',
    user2:'',
    user1Submit:false,
    user2Submit:false
  }

  changeUser1(e){
    this.setState({
      user1:e.target.value
    })
  }

  changeUser2(e){
    this.setState({
      user2:e.target.value
    })
  }

  render() {
    const {user1,user2,user1Submit,user2Submit} = this.state
    return(
      <main className='battle'>
        <h1>Instructions</h1>
        <div className='battle-options'>
          <p>Enter two Github users</p>
          <div>
            <i className="fa fa-users fa-5x" style={{color:"rgb(253,190,155)"}}></i>
          </div>
        </div>
        <div className='battle-options'>
          <p>Battle</p>
          <div>
            <i className="fa fa-fighter-jet fa-5x" style={{color:"gray"}}></i>
          </div>
        </div>
        <div className='battle-options'>
          <p>See the winner</p>
          <div>
            <i className="fa fa-users fa-5x" style={{color:"rgb(253,231,0)"}}></i>
          </div>
        </div>

        <h1>Players</h1>
        <div className='battle-options'>
          <p>Player One</p>
          <div  style={{display:(user1Submit?'none':'flex')}}>
            <input type="text" placeholder='github username' value={user1} onChange={this.changeUser1.bind(this)}/>
            <input type="submit" value='SUBMIT' onClick={()=>{this.setState({user1Submit:true})}} disabled={user1===''}/>

          </div>
          <div className="user" style={{display:(user1Submit?'flex':'none')}}>
            <div className='user-data'>
              <img src={`https://github.com/${user1}.png?size=200`} alt={user1}/>
              <span>{user1}</span>
            </div>
            <i className="fa fa-times fa-2x delete" onClick={()=>{this.setState({user1Submit:false})}}></i>
          </div>
        </div>
        <div className='battle-options'>
          <p>Player Two</p>
          <div style={{display:(user2Submit?'none':'flex')}}>
            <input type="text" placeholder='github username' onChange={this.changeUser2.bind(this)}/>
            <input type="submit" value='SUBMIT' onClick={()=>{this.setState({user2Submit:true})}}/>
          </div>
          <div className="user" style={{display:(user2Submit?'flex':'none')}}>
            <div className='user-data'>
              <img src={`https://github.com/${user2}.png?size=200`} alt={user2}/>
              <span>{user2}</span>
            </div>
            <i className="fa fa-times fa-2x delete" onClick={()=>{this.setState({user2Submit:false})}}></i>
          </div>

        </div>

        <NavLink to={{pathname:'/BattleResult',state:{user1,user2}}} className='nav-link-result' style={{display:(user1Submit&&user2Submit?'block':'none')}}>
          Battle
        </NavLink>
      </main>
    )
  }
}