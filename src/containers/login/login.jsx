/*
用户登陆的路由组件
 */

import React ,{Component} from 'react'

import './login.styl'

export default class Login extends Component {
  render () {
    return (
      <div className="profile">
        <div className="profile_content">
          {/*严选*/}
          <div className="strict">
            <div className="strict_img">
              <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
            </div>
          </div>
          {/*登陆*/}
          <div className="login">
            <div className="login_phone">
            <i className="iconfont icon-19" ></i>
            <span>手机号码登录</span>
          </div>
          <div className="login_mail">
          <i className="iconfont icon-xin"></i>
          <span>邮箱帐号登录</span>
        </div>
        <div className="register">
          <span>手机号快捷注册</span>
          <i className="iconfont icon-you2"></i>
        </div>
      </div>

    {/*底部*/}
    <div className="foot">
      <div className="foot_content">
        <div className="footwei" >
          <i className="iconfont icon-weixin"></i>
          <span>微信</span>
        </div>
        <div className="footqq">
          <i className="iconfont icon-QQ"></i>
          <span>QQ</span>
        </div>
        <div className="footbo">
          <i className="iconfont icon-weibo"></i>
          <span>微博</span>
        </div>
      </div>

    </div>
  </div>
  </div>
    )
  }
}