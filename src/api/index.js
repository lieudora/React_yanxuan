/*
* 包含n个接口请求函数的模块
* 每个函数返回的都是promise对象
* */

import ajax from './ajax'

//请求主页面
export const reqMaison = () => ajax('/maison')

//识物页面
export const reqChose = () => ajax('/chose')

//分类
export const reqClassifier = () => ajax('/classifier')