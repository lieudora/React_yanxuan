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
    classright:{}
  }
  async componentDidMount(){
    const result = await reqClassifier()
    if(result.code ===0 ){
        const classright = result.data
        this.setState({
        classright
      })
    }
  }
   render(){
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
                 {/* v-for="(L1List, index) in classifier.categoryL1List" :key="index" @click="getIndex(index)" :className="{active: indexActive === index}"*/}

                 <li path="classifier/classright">name</li>
             </ul>
           </div>
           {/*右侧*/}
           {/*:indexActive="indexActive" :classifier="classifier"*/}
             <Classright/>
   </div>
   </div>
       )
   }
}
export default withRouter(Classifier)