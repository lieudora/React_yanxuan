/*
用户注册的路由组件
 */
import React, {Component} from 'react'

import './register.styl'

export default class Register extends Component {
  render() {
    return (
      <div className="register_wrap">
        <div className="register">
          <div className="register_content">
            {/*严选*/}
            <div className="strict">
              <div className="strict_img">
                <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""/>
              </div>
            </div>
          </div>
          {/*登录切换*/}
          <div className="login_header_title">
            <a href="javascript:;" className="on" >
              <span>短信登录</span>
            </a>
            <a href="javascript:;" className="on">
              <span>用户名登录</span>
            </a>
          </div>
          {/*验证*/}
          <div className="verify">
            <form >
            {/*登陆*/}
            <div className="on showinput" >
              <div className="verify_login">
                <input type="tel" placeholder="请输入手机号" maxlength="11" />
              </div>
              <div className="verify_register">
                <input type="password" placeholder="密码"/>
              </div>
              <div className="captcha">
                <input type="text" placeholder="验证码" maxlength="6" />
              </div>
            </div>
            {/*用户名登录*/}
            <div className="on showinput" v-show="loginway" >
              <div className="verify_login">
                <input placeholder="用户名注册"  />
              </div>
              <div className="verify_register">
                <input type="password" placeholder="密码" />
              </div>
            </div>

            <div className="btn">
              <div className="btn_login">
              <a href="#">登录</a>
            </div>
            <div className="btn_else">
              <a href="javascript:;">其他登录方式</a>
            </div>
            <div className="btn_register">
              <a href="javascript:;">
                注册帐号
                <i className="iconfont icon-you2"></i>
              </a>
            </div>
          </div>
        </form>
      </div>
  </div>
  </div>
    )
  }
}
