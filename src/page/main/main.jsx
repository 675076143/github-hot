import React,{Component} from "react";

import {reqHotByLanguage} from "../../api";
export  default class Main extends Component{

  state = {
    languages: ['All','JavaScript','Ruby','Java','CSS','Python'],
    data:"123",
    items:[],
    mainStyle:{
      display:'flex',
      flexWrap:'wrap',
      justifyContent:'space-around'
    },
    highLightStyle:{
      color:'indianred'
    },
    ulStyle:{
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'center'
    },
    liStyle:{
      margin:'10px'
    },
    cardStyle:{
      width: '24%',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      margin:'3px',
      backgroundColor:'#f4f4f4'
    },
    imgStyle:{
      width: '50%'
    },
    starStyle:{
      color:"yellow"
    },
    warningStyle:{
      color:"orangered"
    },
    forkStyle:{
      color:"skyblue"
    },
    userStyle:{
      color:"orange"
    },
    currentLanguage:"All"
  }

  componentDidMount() {
    this.showHotProject('All')
  }

  showHotProject =async language =>{
    console.log(language)
    this.setState({
      currentLanguage:language
    })
    const result = await reqHotByLanguage(language);
    if(result.items){
      this.setState({items:result.items})
      console.log(this.state.items)
    }
  }

 render() {
    const {items,starStyle,imgStyle,mainStyle,forkStyle,warningStyle,userStyle,ulStyle,liStyle,currentLanguage} = this.state;
   return (
     <div>
       <header>
         <nav>
           <ul style={ulStyle}>
             {this.state.languages.map(v=>(
               <li style={{...liStyle,color:(currentLanguage===v?"indianred":"black")}} onClick={()=>{this.showHotProject(v)}} key={v}>{v}</li>
             ))}
           </ul>
         </nav>
       </header>
       <main style={mainStyle}>
         {items.map((v,k)=>(
           <div id='card' style={this.state.cardStyle}>
             <h3 style={{fontWeight:300}}>#{k+1}</h3>
             <img style={imgStyle} src={v.owner.avatar_url} alt=""/>
             <h4 style={{color:"indianred"}}>{v.name}</h4>
             <div id='card-text' style={{width:"80%"}}>
               <p style={{fontWeight:'bold'}}><i className="fa fa-star" style={userStyle}></i>{v.owner.login}</p>
               <p><i className="fa fa-star" style={starStyle}></i>{v.stargazers_count.toLocaleString()} stars</p>
               <p><i className="fa fa-code-fork" style={forkStyle}></i>{v.forks_count.toLocaleString()} forks</p>
               <p><i className="fa fa-warning" style={warningStyle}></i>{v.open_issues_count.toLocaleString()} open issues</p>
             </div>
           </div>
         ))}
       </main>
     </div>

   )
 }
}