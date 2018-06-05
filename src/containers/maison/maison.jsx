/*
应用主界面路由组件
 */
import'axios'
import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import {withRouter} from 'react-router-dom'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import BScroll from 'better-scroll'

import './maison.styl'
import {reqMaison} from '../../api'


class Maison extends Component {
  state = {
    maison: {},
    focusList:[], // 无缝滑屏
    newItemList:[],
    popularItemList:[],
    topicList:[],
    cateList:[],
    headCateList:[],

  }
  async componentWillMount(){
      const result = await reqMaison()
      if (result.code === 0) {
        const maison = result.data
        this.setState({
          maison,
        })
        this.setState({
          focusList:maison.focusList,
          headCateList:maison.headCateList,
          newItemList:maison.newItemList,
          popularItemList:maison.popularItemList,
          topicList:maison.topicList,
          cateList:maison.cateList,

        })
      }
    }
  componentDidUpdate (){
        if(this.sw) {
          this.sw.destroy()
        }
        this.sw = new Swiper('.swiper-container', {
          autoplay: {
            delay: 5000,
          },
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          }
        })
      // 导航
      let nav = new BScroll ('.nav', {scrollX: true})
      // 新品首发
      let scroll = new BScroll ('.pic-wrapper', {scrollX: true})
      // 人气推荐
      let scrollTwo = new BScroll ('.pic-wrapper-two', {scrollX: true})
      // 专题精选
      let scrollSelection = new BScroll ('.selection_lists', {scrollX: true})

  }
       render(){
          const {
            newItemList,
            popularItemList,
            topicList,
            cateList,
            focusList,
            headCateList
          } = this.state
       return(
           <div>
             <section className="maison">
               {/*头部*/}
               <div className="header_nav">
                 <div className="maison_header">
                   <div className="logo">网易严选</div>
                     <div className="search">
                       <div className="search_content">
                         <img src="./images/search.png" alt=""/>
                         <span>搜索商品, 共9882款好物</span>
                       </div>
                     </div>
                   </div>

                 {/*导航*/}
                 <div className="nav" >
                   <ul className="list">
                     {
                       headCateList.map((headItem, index) => (
                         <li className="tab" key={index}>
                           <span className="text">
                             {headItem.name}
                           </span>
                         </li>
                       ))
                     }

                   </ul>
                 </div>
               </div>

               {/*无缝滑屏*/}
               <div className="swiper">
                 <div className="swiper-container">
                   {/* Additional required wrapper */}
                   <div className="swiper-wrapper">
                     {/* Slides */}
                     {
                       focusList.map((Item, index) => (
                         <div className="swiper-slide" key={index}>

                           <a href="javascript:;" className="swiper-imgs">
                             <div className="swiper-img">
                               <img src={Item.picUrl} alt=""/>
                             </div>
                           </a>
                         </div>
                       ))
                     }

                 </div>
                 {/* If we need pagination */}
                 <div className="swiper-pagination"></div>
               </div>
               <div className="service_policy">
                 <ul className="service_policy_lists">
                   <li className="item">
                     <i className="iconfont icon-gouxuan"></i>
                     <span className="text">网易自营品牌</span>
                   </li>
                   <li className="item">
                     <i className="iconfont icon-gouxuan"></i>
                     <span className="text">30天无忧退货</span>
                   </li>
                   <li className="item">
                     <i className="iconfont icon-gouxuan"></i>
                     <span className="text">48小时快速退款</span>
                   </li>
                 </ul>
               </div>
           </div>
               
               {/*品牌直供*/}
               <div className="fabricant">
                 <header className="fabricant_title">
                   <Link to='/'>
                     <div className="fabricant_text">
                       <p>品牌制造商直供</p>
                       <i className="iconfont icon-you1"></i>
                     </div>
                   </Link>
                 </header>
                 <div className="fabricant_classNameer">
                   <ul className="fabricant_lists" >
                     <li className="fabricant_item left">
                     <a href="javascript:;">
                       <div className="manufacturer">
                         <h4 className="manufacturer_title"></h4>
                         <div className="manufacturer_price">
                           <span></span>
                           <span>元起</span>
                         </div>
                       </div>
                     </a>
                     </li>
                   </ul>
                 </div>
               </div>

               {/*新品首发*/}
               <div className="nouveautes">
                 <header className="nouveautes_title">
                   <a href="javascript:;">
                     <div className="new_title">
                       <div className="title">新品首发</div>
                     </div>
                     <div className="complet">
                       <p>查看全部</p>
                       <i className="iconfont icon-you2"></i>
                     </div>
                   </a>
                 </header>
                 <div className="nouveautes_lists">
                   <div className="pic-wrapper">
                     <ul className="pic-list">
                       {
                         newItemList.map((newItem,index)=>(
                           <li className="pic-item" key={index}>
                             <a href="javascript:;">
                               <img width="120" height="90" src={newItem.listPicUrl} alt=""/>
                               <div className="brand_price">
                                 <div className="present">
                                   <p>满赠</p>
                                 </div>
                                 <div className="brand">
                                   <span>{newItem.name}</span>
                                 </div>
                                 <div className="explosive">{newItem.simpleDesc}</div>
                                 <div className="price">
                                   <span>¥</span>
                                   <span>{newItem.retailPrice}</span>
                                 </div>
                               </div>
                             </a>
                           </li>
                         ))

                       }

                     </ul>
                   </div>
                  </div>
               </div>

               {/*人气推荐*/}
               <div className="recommander">
                 <header className="recommander_title">
                   <a href="javascript:;">
                     <div className="new_title">
                       <div className="title">人气推荐 · 好物精选</div>
                     </div>
                     <div className="complet">
                       <p>查看全部</p>
                       <i className="iconfont icon-you2"></i>
                     </div>
                   </a>
                 </header>
                 <div className="recommander_lists">
                   <div className="pic-wrapper-two">
                     <ul className="pic-list">

                         {
                           popularItemList.map((popularItem, index)=>(
                             <li className="pic-item"  key={index}>
                               <a href="javascript:;">
                                 <img width="120" height="90" src={popularItem.listPicUrl} alt=""/>
                                 <div className="brand_price">
                                   <div className="present">
                                     <p>满赠</p>
                                   </div>
                                   <div className="brand">
                                     <span>name</span>
                                   </div>
                                   <div className="explosive">{popularItem.simpleDesc}</div>
                                   <div className="price">
                                     <span>¥</span>
                                     <span>{popularItem.retailPrice}</span>
                                   </div>
                                 </div>
                               </a>
                             </li>
                           ))
                         }

                     </ul>
                    </div>
                 </div>
               </div>

               {/*严选限时购*/}
               <div className="time_limit">
                 <div className="time_limit_left">
                   <div className="limit">
                     <div className="limit_text">严选限时购</div>
                   </div>
                   <div className="time">
                     <span className="hours">00</span>
                     <span className="colon">:</span>
                     <span className="mins">00</span>
                     <span className="colon">:</span>
                     <span className="secs">00</span>
                   </div>
                   <div className="rest_time">
                    <span>
                      <span>下一场 </span>
                      <span>22:00</span>
                      <span> 开始</span>
                    </span>
                   </div>
                 </div>
                 <div className="time_limit_right">
                   <img src="http://yanxuan.nosdn.127.net/ff5af94280c6e588aa3d83304461460b.png?imageView&quality=85&thumbnail=330x330" alt=""/>
                   <div className="price">
                       <div className="details_price">
                         <div className="unit_price">
                           <span>¥</span>
                           <span>45</span>
                         </div>
                         <div className="unit_price">
                           <span>¥</span>
                           <span>59</span>
                         </div>
                       </div>
                     </div>
                 </div>
               </div>

               {/*福利社*/}
               <div className="welfare">
                 <a href="javascript:;">
                   <img src="http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg" alt=""/>
                 </a>
               </div>

               {/*专题精选*/}
               <div className="selection">
                 <header className="selection_title">
                   <a href="javascript:;">
                     <div className="selection_text">
                       <p>专题精选</p>
                       <i className="iconfont icon-you1"></i>
                     </div>
                   </a>
                 </header>
                 <div className="selection_content">
                   <ul className="selection_lists">
                     <div className="selection_list" >
                       {
                         topicList.map((topicItem, index) => (
                           <li key={index}>
                             <a href="javascript:;">
                               <img src={topicItem.scenePicUrl} alt=""/>
                             </a>
                             <div className="selection_bottom">
                               <h4>{topicItem.title}</h4>
                               <span>
                                <span>元起</span>
                                <span>{topicItem.priceInfo}</span>
                           </span>
                             </div>
                             <div className="brief">{topicItem.subtitle}</div>
                           </li>
                         ))
                       }

                     </div>
                   </ul>
                 </div>
               </div>

               {/*居家好物*/}
               {
                 cateList.map((cateItem, index) => (
                   <div className="home" key={index}>
                     <header className="home_title" >
                       <a href="javascript:;">
                         <div className="home_text" >
                           <p>{cateItem.name}好物</p>
                         </div>
                       </a>
                     </header>
                     <div className="home_content" >
                       <div className="home_con">
                         {
                           cateItem.itemList.map((Item, index) => (
                             <div className="home_lists" key={index}>
                               <div className="home_img" >
                                 <img src={Item.listPicUrl} alt=""/>
                               </div>
                               <div className="home_brief">
                                 {Item.simpleDesc}
                               </div>
                               <div className="home_name">
                                 <span>{Item.name}</span>
                               </div>
                               <div className="home_price">
                                 <span>¥</span>
                                 <span>{Item.retailPrice}</span>
                               </div>
                             </div>
                           ))
                         }
                       </div>
                     </div>
                   </div>
                 ))
               }


               {/*footer*/}
               <footer>
                 <div className="foot">
                   <div className="foot_top">
                     <div className="foot_left">下载APP</div>
                     <div className="foot_right">电脑版</div>
                   </div>
                   <div className="foot_bottom">
                     <div className="bottom_top">网易公司版权所有 © 1997-</div>
                     <div className="bottom">食品经营许可证：JY13301080111719</div>
                   </div>
                 </div>
               </footer>

              </section>
           </div>
       )
   }
}

export default withRouter(Maison)