import Rest from '../rest'
import SocketObj from '@/utils/socket.js'


export default {
  install (Vue) {
    Vue.prototype.$http = new Rest()
    Vue.prototype.$socketObj = new SocketObj()
  }
}

