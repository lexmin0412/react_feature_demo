import React from 'react'
import webRouter from './router/index'

function Header(props) {

  console.log('header', props)

  function backClick() {
    webRouter.back()
  }
  
  return (
    <div onClick={backClick}>
      header
    </div>
  )
}

export default Header