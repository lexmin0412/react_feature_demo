import React from 'react'
import ReactFeature from './../reactFeature'
import Hooks from './../hooks'

const routeList = [
  {
    name: '首页',
    path: '*',
    component: <ReactFeature />
  },
  {
    name: 'Hooks',
    path: '/hooks',
    component: <Hooks />
  },
]

export default routeList