/*
应用购物车面路由组件
 */
import React, {Component} from 'react'
import './order.styl'

export default class Order extends Component {
   render(){
       return(
           <div>
             <div className="order">
               <div className="order_top">
                 <div className="order_title">
                   <span>购物车</span>
                 </div>
                 <div className="order_lists">
                   <ul className="order_rule">
                     <li>
                       <i className="iconfont icon-dian"></i>
                       30天无忧退货
                     </li>
                     <li>
                       <i className="iconfont icon-dian"></i>
                       48小时快速退款
                     </li>
                     <li>
                       <i className="iconfont icon-dian"></i>
                       满88元免邮费
                     </li>
                   </ul>
                 </div>
               </div>
               <div className="order_content">
                 <img src={require('./image/char.png')} alt=""/>
                   <div className="order_content_text">去添加点什么吧</div>
                   <div className="order_btn">登录</div>
               </div>
             </div>
           </div>
       )
   }
}