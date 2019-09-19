
/**
*  HTTP 简单封装
*/

export default class Rest {
  /**
   * 构造方法
   */
  constructor() {
    /**
     * 接口基础地址
     * @type {string}
     */
    this.baseURL = 'http://120.40.77.185:59986/gateway/'

    /**
     * 请求路劲
     * @type {string}
     */
    this.path = ''

    /**
     * Headers
     * @type {Object}
     */
    this.header = {}

    // 支持的请求方式
    const methods = ['GET', 'POST']

    // 注册方法到 this
    methods.forEach((method) => {
      this[method] = options => this.request(method, options)
    })
  }

  /**
   * 请求
   * @param {string} method='GET' 请求方式
   * @param {Object} [options={}] 选项
   */

  request(method = 'GET', options = {}, header = this.header ) {
    const { data = {}, url = '' } = options
    return new Promise((resolve, reject) => {
      uni.request({
        url:  this.baseURL + url,
        data,
        method,
        header
      }).then(resolve).catch(reject)
    })
  }

  /**
   * 附加路劲
   * @param {string} [path=''] 路劲
   */
  addPath(path = '') {
    this.path = `${this.path}/${path}`

    return this
  }

  /**
   * 添加 Headers
   * @param {Object} headers Headers
   */
  addHeaders(headers) {
    Object.assign(this.headers, headers)
    return this
  }
}
