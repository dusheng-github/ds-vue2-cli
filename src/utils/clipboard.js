export default function loadClipboard() {
  return new Promise((resolve, reject) => {
    if (window.ClipboardJS) {
      resolve({ ClipboardJS: window.ClipboardJS })
    } else {
      const url = '//cdn.jsdelivr.net/npm/clipboard@2/dist/clipboard.min.js'

      const script = document.createElement('script')
      script.src = url
      document.head.appendChild(script)

      script.addEventListener(
        'load',
        e => {
          resolve({ ClipboardJS: window.ClipboardJS })
        },
        false
      )

      script.onerror = function(err) {
        reject(err)
      }
    }
  })
}
