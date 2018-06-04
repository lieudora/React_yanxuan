/*
* 包含所有action creator 模块
* 异步action
* 同步action
* */

import {
  RECEIVE_MAIN
} from './action-types'

import {
  reqMain
} from '../api'

//分发同步action
const authmain = (datahome) => ({type:RECEIVE_MAIN, data: datahome})

//分发异步action
export const Main = () => {
  return async dispatch => {
    const result = await reqMain()
    if (result.code === 0) {
      dispatch(authmain(result.data))
    } else {
      dispatch('错误')
    }
  }
}