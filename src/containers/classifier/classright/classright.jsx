import React,{Component} from 'react'
import PropTypes from 'prop-types'
import './classright.styl'


export default class Classright extends Component {
    state={
      categoryL1List:{},
      subCateList:[]
    }

    // componentWillReceiveProps(newprops){
    //   const {categoryL1List}=newprops
    //   console.log(categoryL1List)
    //   const subCateList =categoryL1List.subCateList
    //   console.log(subCateList)
    //
    //   this.setState({
    //     categoryL1List:newprops.categoryL1List,
    //     subCateList
    //   })
    //
    // }

    render(){
    const {categoryL1List} = this.props
     console.log(this.props.categoryL1List)
       return(
           <div className="right">
             {
               categoryL1List ? (<div>
                 <div className="right_title" >
                   <img src='' alt=""/>
                   <div className="title">
                     <i className="iconfont icon-yi"></i>
                     <span>{categoryL1List.name}分类</span>
                     <i className="iconfont icon-yi"></i>
                   </div>
                 </div>
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
               </div>) : null
             }

          </div>
       )
   }
}