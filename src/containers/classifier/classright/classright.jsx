import React,{Component} from 'react'
import './classright.styl'


export default class Classright extends Component {
   render(){
       return(
           <div className="right">
             {/*图*/}
             <div className="right_title" >
               <img src="" alt=""/>
               <div className="title">
                 <i className="iconfont icon-yi"></i>
                 <span>name分类</span>
                 <i className="iconfont icon-yi"></i>
               </div>
             </div>
             {/*下标*/}
             <div className="right_picture" >
               <ul className="right_lists">
                 <li className="right_li">
                 <a href="#">
                   <img src="" alt="pic"/>
                   <div className="right_text">
                    name
                   </div>
                 </a>
               </li>
             </ul>
           </div>
         </div>
       )
   }
}