/*
* 底部导航
* */

import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import {NavLink} from 'react-router-dom'

class Footerguide extends Component {
   render(){
       return(
           <div>
              <footer className="footer_guide border-1px">
              {/*  className= {`guide_item ${this.props.location.pathname==='/shop' ? 'on' : ''}`} onClick={() => this.props.history.replace('/shop')}*/}
                 <a className= {`guide_item ${this.props.location.pathname==='/maison' ? 'on' : ''}`} onClick={() => this.props.history.replace('/maison')}>
                    <span className="item_icon">
                      <i className="iconfont icon-shouye"></i>
                    </span>
                    <span>首页</span>
                 </a>
                 <a className= {`guide_item ${this.props.location.pathname==='/chose' ? 'on' : ''}`} onClick={() => this.props.history.replace('/chose')}>
                    <span className="item_icon">
                      <i className="iconfont icon-iconfontyuanquanxuanzhong"></i>
                    </span>
                    <span>识物</span>
                 </a>
                 <a className= {`guide_item ${this.props.location.pathname==='/classifier' ? 'on' : ''}`} onClick={() => this.props.history.replace('/classifier')}>
                   <span className="item_icon">
                      <i className="iconfont icon-fenlei"></i>
                    </span>
                   <span>分类</span>
                 </a>
                 <a className= {`guide_item ${this.props.location.pathname==='/order' ? 'on' : ''}`} onClick={() => this.props.history.replace('/order')}>
                   <span className="item_icon">
                      <i className="iconfont icon-gouwuche1"></i>
                    </span>
                   <span>购物车</span>
                 </a>
                 <a className= {`guide_item ${this.props.location.pathname==='/login' ? 'on' : ''}`} onClick={() => this.props.history.replace('/login')}>
                   <span className="item_icon">
                      <i className="iconfont icon-geren"></i>
                    </span>
                   <span>个人</span>
                 </a>
               </footer>
           </div>

       )
   }
}
export default withRouter (Footerguide)