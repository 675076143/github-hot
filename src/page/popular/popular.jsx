import React,{Component} from "react";
import { Spin } from 'antd';
import './popular.css'
import {reqHotByLanguage} from "../../api";
import Card from "../card/card";

export  default class Popular extends Component{

  state = {
    page:1,
    languages: ['All','JavaScript','Ruby','Java','CSS','Python'],
    items:[],
    currentLanguage:"All"
  };

  componentDidMount() {
    this.showHotProject('All')
    //监听是否滚动到底，从而加载第二页数据
    window.addEventListener("scroll", async ()=>{
      console.log('scroll')
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      console.log(scrollTop+" + "+clientHeight+" and "+scrollHeight)
      //避免没有数据的时候 重复执行 scrollHeight > clientHeight
      if(scrollHeight > clientHeight && scrollTop + clientHeight === scrollHeight) {
        //加载下一页数据
        this.setState({
          page:this.state.page+1
        })
        const result = await reqHotByLanguage(this.state.currentLanguage,this.state.page)
        if(result.items){
          //新增第二页数据
          const items = this.state.items
          items.push(...result.items)
          this.setState({items})
        }
      }
    })
  }

  /**
   * 根据语言显示热门项目
   * @param language
   * @returns {Promise<void>}
   */
  showHotProject =async language =>{
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
    const {items,currentLanguage} = this.state;
   return (
     <div ref='popular'>
       <nav>
         <ul>
           {this.state.languages.map(v=>(
             <li style={{color:(currentLanguage===v?"indianred":"black")}} onClick={()=>{this.showHotProject(v)}} key={v}>{v}</li>
           ))}
         </ul>
       </nav>
       <main>
         {items.map((v,k)=>(
           <Card v={v} k={k}/>
         ))}
       </main>
       <div className="loading">
         <Spin />Loading...
       </div>

     </div>

   )
 }
}