/**
 * 路由基类
*/

const APP_CONTAINER = document.getElementById('apps')

class BaseRouter {
  constructor(routerList) {
    this.routerList = routerList
  }

  // 根据路由渲染对应的组件内容
  render(path) {
    // 在路由列表中匹配路由
    let _ELEMENT = this.routerList.find(route=>route.path===path)
    // 如果没有匹配到则匹配全局路由
    _ELEMENT = _ELEMENT ? _ELEMENT : this.routerList.find(route=>route.path==='*')
    // 在容器中渲染匹配到的组件内容
    // APP_CONTAINER.innerHTML = _ELEMENT.component
  }
}

export default BaseRouter