import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CardIndex from './CardIndex.js'
import CardShowContainer from './CardShowContainer'
import NewCardContainer from './NewCardContainer'
import WelcomePage from './WelcomePage'

export const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={WelcomePage}/>
          <Route exact path="/cards" component={CardIndex}/>
          <Route exact path="/cards/new" component={NewCardContainer}/>
          <Route exact path="/cards/:id" component={CardShowContainer}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
