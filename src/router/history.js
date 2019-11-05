/**
 * History路由类
 */

import BaseRouter from './base'

class HistoryRouter extends BaseRouter {
  constructor(routerList) {
    super(routerList)
  }

  /**
   * history追加路由
   * @param {string} path 路由名称
   */
  push(path) {
    window.history.pushState({data: 123}, '标题', path)
    this.render(path)
  }
  
  /**
   * 返回上一路由
   */
  back() {
    window.history.back()
  }
}

export default HistoryRouter