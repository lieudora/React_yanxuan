/*
应用识物面路由组件
 */
import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

import './chose.styl'
import {
  reqMaison,
  reqChose
} from "../../api";

class Chose extends Component {
    state={
      chose: {},
      banner:[],
      recommendOne:[],
      recommendTwo:[],
      recommendThree:[],
      tenfifteen:[],
      zhenOne:[],
      zhenTwo:[],
      zhenThree:[],
      yxLook:[]
    }
  async componentWillMount() {
    const result = await reqChose()

    if (result.code === 0) {
      const chose = result.data
      this.setState({
        chose,
      })
      this.setState({
        banner:chose.banner,
        recommendOne:chose.recommendOne,
        recommendTwo:chose.recommendTwo,
        recommendThree:chose.recommendThree,
        tenfifteen:chose.tenfifteen,
        zhenOne:chose.zhenOne,
        zhenTwo:chose.zhenTwo,
        zhenThree:chose.zhenThree,
        yxLook:chose.yxLook,
        findMore:chose.findMore
      })
    }
  }
   render(){
      const {
        banner,
        recommendOne,
        recommendTwo,
        recommendThree,
        tenfifteen,
        zhenOne,
        zhenTwo,
        zhenThree,
        yxLook,
        findMore
      } =this.state
       return(
           <div>
             <div className="chose">
               {/*轮播*/}
               <div className="carousel">
                 <div className="carousel_top">
                   <div className="carousel_top_content" >
                     {
                       banner.map((banItem, index) => (
                         <a href="javascropt:;" key={index}>
                           <div className="carousel_top_text">
                             <div className= "top_text">
                               <div className="strict">
                                 <i className="iconfont icon-yi"></i>
                                 subTitle
                                 <i className="iconfont icon-yi"></i>
                               </div>
                               <div className="fairy"> title</div>
                               <div className="subtrac"> ban</div>
                             </div>
                           </div>
                         </a>
                       ))
                     }
                   </div>
                 </div>
                 <div className="carousel_buttom">
                   <div className="carousel_buttom_wrap">
                     <div className="carousel_buttom_content">
                       <a href="javascropt:;">
                         <img src="" alt=""/>
                         <div className="buttom_title">
                           <span>title</span>
                         </div>
                       </a>
                     </div>
                   </div>
                 </div>
               </div>

               {/*严选推荐*/}
               <div className="chose_recommend" >
                 <div className="chose_recommend_title">
                   <p>为你推荐</p>
                 </div>
                 <div className="chose_rec">
                   {/*为你推荐*/}
                   <div className="chose_top">
                     <a href="#">
                       <div className="chose_top_img">
                         <img src={recommendOne.picUrl} alt=""/>
                         <div className="img_text">
                           <span>{recommendOne.nickname}</span>
                         </div>
                       </div>
                       <div className="how">{recommendOne.title}</div>
                       <div className="price">
                         <span>{recommendOne.priceInfo}</span>
                         <span>元起</span>
                       </div>
                     </a>
                   </div>
                   <div className="chose_center_bottom" v-if="chose.recommendTwo">
                     <a href="#">
                       <div className="left">
                         <div className="left_img">
                           <img src={recommendTwo.avatar} alt=""/>
                           <span>{recommendTwo.nickname}</span>
                         </div>
                         <div className="left_text">
                           <span>{recommendTwo.subTitle}</span>
                         </div>
                       </div>
                       <div className="right">
                         <div className="right_img">
                           <img src={recommendTwo.picUrl} alt=""/>
                           <div className="right_text">
                             <span>{recommendTwo.typeName}</span>
                           </div>
                         </div>
                       </div>
                     </a>
                   </div>
                   <div className="chose_center_bottom" >
                     <a href="#">
                       <div className="left">
                         <div className="left_img">
                           <img src={recommendThree.avatar} alt=""/>
                           <span>{recommendThree.nickname}</span>
                         </div>
                         <div className="left_text">
                           <span>{recommendThree.subTitle}</span>
                         </div>
                       </div>
                       <div className="right">
                         <div className="right_img">
                           <img src={recommendThree.picUrl} alt=""/>
                           <div className="right_text">
                             <span>{recommendThree.typeName}</span>
                           </div>
                         </div>
                       </div>
                     </a>
                   </div>
                 </div>
               </div>

               {/*十点一刻*/}
               <div className="ten">
                 <div className="ten_content" >
                   <div className="ten_title">
                     <p>十点一刻</p>
                   </div>
                   <div className="talk_content">
                     <div className="talk_slide" >
                       {
                         tenfifteen.map((ten, index) => (
                           <a href="javascropt:;" key={index}>
                             <div className="img" >
                               <div className="talk">
                                 <i className="iconfont icon-yi"></i>
                                 <span>今日话题</span>
                                 <i className="iconfont icon-yi"></i>
                               </div>
                               <div className="talk_live">{ten.title}</div>
                                 <div className="talk_need">{ten.desc}</div>
                               <div className="talk_name">
                           <div className="talk_img">
                           {/*头像*/}

                             <img alt="" src=""/>
                             <div className="talk_perple">
                           <span>{ten.participantNum}</span>
                             <span>人参加</span>
                           </div>
                           {/*参与话题*/}
                          <div>
                           </div>
                         </div>
                       </div>
                     </div>
                   </a>
                       ))
                     }

                     <a href="#" >
                       <div className="talk_two">
                         <div className="talk_text">
                           <p>查看全部话题</p>
                           <i className="iconfont icon-you1"></i>
                           <i></i>
                         </div>
                       </div>
                     </a>
                   </div>
                 </div>
               </div>

             </div>

               {/*严选甄品*/}
               <div className="chose_recommend" >
                 <div className="chose_recommend_title">
                   <p>严选甄品</p>
                 </div>
                 <div className="chose_rec">
                   {/*严选甄品*/}
                   <div className="chose_top">
                     <a href="#">
                       <div className="chose_top_img">
                         <img src={zhenOne.picUrl} alt=""/>
                         <div className="img_text">
                           <span>{zhenOne.nickname}</span>
                         </div>
                       </div>
                       <div className="how">{zhenOne.title}</div>
                       <div className="price">
                         <span>{zhenOne.priceInfo}</span>
                         <span>元起</span>
                       </div>
                     </a>
                   </div>
                   <div className="chose_center_bottom">
                     <a href="#">
                       <div className="left">
                         <div className="left_img">
                           <img src={zhenTwo.avatar} alt=""/>
                           <span>{zhenTwo.nickname}</span>
                         </div>
                         <div className="left_text">
                           <span>{zhenTwo.subTitle}</span>
                         </div>
                       </div>
                       <div className="right">
                         <div className="right_img">
                           <img src={zhenTwo.picUrl} alt=""/>
                           <div className="right_text">
                             <span>{zhenTwo.typeName}</span>
                           </div>
                         </div>
                       </div>
                     </a>
                   </div>
                   <div className="chose_center_bottom" v-if="chose.zhenThree">
                     <a href="#">
                       <div className="left">
                         <div className="left_img">
                           <img src={zhenThree.avatar} alt=""/>
                           <span>{zhenThree.nickname}</span>
                         </div>
                         <div className="left_text">
                           <span>{zhenThree.subTitle}</span>
                         </div>
                       </div>
                       <div className="right">
                         <div className="right_img">
                           <img src={zhenThree.picUrl} alt=""/>
                           <div className="right_text">
                             <span>{zhenThree.typeName}</span>
                           </div>
                         </div>
                       </div>
                     </a>
                   </div>
                 </div>
               </div>

               {/*严选LOOK*/}
               <div className="look" v-if="chose.yxLook">
                 <div className="look_title">严选LOOK</div>
                 <a href="#">
                   <img src={yxLook.picUrl} alt="pic"/>
                   <div className="look_content">
                     <div className="look_con">
                       {/*头像，名*/}
                       <div className="look_img">
                         <img src={yxLook.picUrl} alt=""/>
                         <div className="look_name">{yxLook.nickname}</div>
                       </div>
                       <p>{yxLook.content}</p>
                     </div>
                   </div>

                 </a>
               </div>

               {/*题目*/}
               <div className="more_title">
                 <div>更多精彩</div>
               </div>
               {/*更多精彩*/}

               <div className="more" >
               {/*三张图*/}
               <div className="more_content" >
                 {/*图片*/}
                 <div className="picture">
                   <a href="#">
                     <div className="more_img">
                       <div className="img_left">
                         <img src="" alt=""/>
                       </div>
                       <div className="more_top">
                         <img src=""  alt=""/>
                       </div>
                       <div className="more_bottom">
                         <img src=""  alt=""/>
                       </div>
                       <div className="text">
                         title
                       </div>
                     </div>
                   </a>
                 </div>
               </div>
               {/*一张图*/}
               <div className="picture_One">
                 <a href="#">
                   <div className="more_img">
                     <div className="img_conter">
                       <img src="" alt=""/>
                     </div>
                     <div className="text">
                       subTitle
                     </div>
                   </div>
                 </a>
               </div>
             </div>
           </div>
         </div>
       )
   }
}

export default withRouter(Chose)