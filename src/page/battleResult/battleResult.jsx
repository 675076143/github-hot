import React,{Component} from "react";
import ResultCard from "../../components/resultCard/resultCard";
import './battleResult.css'
import {NavLink} from "react-router-dom";
import {reqUser} from "../../api";

export default class BattleResult extends Component{

  state = {
    loser:{},
    winner:{}
  }

  async componentDidMount() {
    const {user1,user2} = this.props.location.state
    const result1 = await reqUser(user1)
    const result2 = await reqUser(user2)
    //判断输赢
    if(result1.public_repos>result2.public_repos){
      this.setState({
        loser:result2,
        winner:result1
      })
    }else {
      this.setState({
        loser:result1,
        winner:result2
      })
    }
  }

  render() {
    const {loser,winner} = this.state
    return(
      <div className='battle-result'>
        <ResultCard role='Loser' data={loser}/>
        <ResultCard role='Winner' data={winner}/>
        <div className='reset'>
          <NavLink to='/Battle' className='nav-link-result'>
            Reset
          </NavLink>
        </div>
      </div>
    )
  }
}