import { post } from './http'

/**
 * 获取用户信息
 * @param {*} data
 */
export const getUserInfo = data => {
  return post('/user/list', data)
}
export const mockUserType = data => {
  return post('mock/userType/sug', data)
}
