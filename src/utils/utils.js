import { Message as Msg } from 'element-ui'
/**
 * 类型判断
 * @param object 需要检查的类型
 * @param checkType 目标类型 不传则返回目标类型
 * @returns {boolean} 是否是目标类型
 * 测试空行
 */
export function typeIs(object, checkType = false) {
  const type = Object.prototype.toString.call(object).slice(8, -1).toLowerCase()
  if (!checkType) {
    return type
  }
  return type === checkType.toLowerCase()
}

export class Message {
  static warn(tips) {
    Msg({
      message: tips,
      type: 'warning'
    })
  }
  static error(tips) {
    Msg({
      message: tips,
      type: 'error',
    })
  }
  static success(tips) {
    Msg({
      message: tips,
      type: 'success'
    })
  }
  static info(tips) {
    Msg({
      message: tips,
      type: 'info'
    })
  }
}