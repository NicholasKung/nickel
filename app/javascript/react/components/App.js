import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CardIndex from './CardIndex.js'

export const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={CardIndex} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
