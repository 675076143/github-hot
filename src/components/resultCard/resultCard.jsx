import React,{Component} from "react";
import './resultCard.css'
export default class ResultCard extends Component{

  render() {
    const {public_repos,location,followers,following,name} = this.props.data
    return(
      <div className="result-card">
        <h1>{this.props.role}</h1>
        <h2>Scores:{public_repos}</h2>
        <h1>{name}</h1>
        <p><i className="fa fa-paper-plane"></i>{location}</p>
        <p><i className="fa fa-users"></i>{followers}</p>
        <p><i className="fa fa-user-plus"></i>{following}</p>
        <p><i className="fa fa-code"></i>{public_repos}</p>
      </div>
    )
  }
}