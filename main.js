import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'


import Counter, {store} from './Counter'

function render() {
  ReactDOM.render(
    <Counter/>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
