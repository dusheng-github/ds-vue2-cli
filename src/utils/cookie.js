// 创建cookie
export function setCookie(name, value, expires, path, domain, secure) {
  var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value)
  if (expires instanceof Date) {
    cookieText += '; expires=' + expires
  }
  if (path) {
    cookieText += '; expires=' + expires
  }
  if (domain) {
    cookieText += '; domain=' + domain
  }
  if (secure) {
    cookieText += '; secure'
  }

  document.cookie = cookieText
}

// 获取cookie
export function getCookie(name) {
  var cookieName = encodeURIComponent(name) + '='
  var cookieStart = document.cookie.indexOf(cookieName)
  var cookieValue = null
  if (cookieStart > -1) {
    var cookieEnd = document.cookie.indexOf(';', cookieStart)
    if (cookieEnd === -1) {
      cookieEnd = document.cookie.length
    }
    cookieValue = decodeURIComponent(
      document.cookie.substring(cookieStart + cookieName.length, cookieEnd)
    )
  }
  return cookieValue
}

// 删除cookie
export function removeCookie(name, domain) {
  document.cookie =
		name + '= ; domain=' + domain + '; path=/; expires=' + new Date(0)
}
