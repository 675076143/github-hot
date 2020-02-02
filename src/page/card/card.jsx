import React,{Component} from "react";
import './card.css'

export default class Card extends Component{
  render() {
    const {k,v} = this.props;
    return(
      <div className='card'>
        <h3>#{k+1}</h3>
        <img src={v.owner.avatar_url} alt=""/>
        <h4>{v.name}</h4>
        <div>
          <p><i className="fa fa-star" style={{color:"orange"}}></i>{v.owner.login}</p>
          <p><i className="fa fa-star" style={{color:"yellow"}}></i>{v.stargazers_count.toLocaleString()} stars</p>
          <p><i className="fa fa-code-fork" style={{color:"skyblue"}}></i>{v.forks_count.toLocaleString()} forks</p>
          <p><i className="fa fa-warning" style={{color:"orangered"}}></i>{v.open_issues_count.toLocaleString()} open issues</p>
        </div>
      </div>
    )
  }
}