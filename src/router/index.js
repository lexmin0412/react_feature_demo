import HistoryRouter from './history'
import routeList from './routes'

class WebRouter extends HistoryRouter {
  constructor(routerList) {
    super(routerList)
    this.routerList = routerList
  }  
}

export default new WebRouter(routeList)