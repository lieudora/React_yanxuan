/*
应用分类页面路由组件
 */
import React, {Component} from 'react'

import {withRouter} from 'react-router-dom'

import Classright from './classright/classright'

import './classifier.styl'
import {reqClassifier} from '../../api'

class Classifier extends Component {
  state = {
    classright:{},
    categoryL1List:[]
  }
  async componentWillMount(){
    const result = await reqClassifier()
    if(result.code ===0 ){
        const classright = result.data
        this.setState({
        classright
      })
      this.setState({
        categoryL1List:classright.categoryL1List
      })
    }
  }
   render(){
    const {categoryL1List} = this.state
       return(
         <div className="classifier">
           {/*内容*/}
           <div className="classifier_content">
             {/*头*/}
             <div className="classifier_header">
               <div className="search">
                 <div className="search_content">
                   <i className="iconfont icon-sousuo"></i>
                   <span>搜索商品, 共9882款好物</span>
                 </div>
               </div>
             </div>
             {/*左侧*/}
             <div className="classifier_left">
               <ul className="lists">
                 {
                   categoryL1List.map((L1List, index) => (
                     <li path="classifier/classright" key={index}>{L1List.name}</li>
                   ))
                 }

             </ul>
           </div>
           {/*右侧*/}
           {/*:indexActive="indexActive" :classifier="classifier"*/}
             <Classright />
   </div>
   </div>
       )
   }
}
export default withRouter(Classifier)