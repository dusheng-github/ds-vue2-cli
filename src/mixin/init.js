
import { Message } from 'element-ui'
export default {
  data() {
    return {

    }
  },
  created() {},
  methods: {
    $warn(tips) {
      Message({
        message: tips,
        type: 'warning'
      })
    },
    $error(tips) {
      Message({
        message: tips,
        type: 'error'
      })
    },
    $success(tips) {
      Message({
        message: tips,
        type: 'success'
      })
    },
    $info(tips) {
      Message({
        message: tips,
        type: 'info'
      })
    },
  },

}
