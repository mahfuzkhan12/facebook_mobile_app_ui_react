import React from 'react'

// examples

const Home = React.lazy(() => import('../Views/Home/Home'))
const NotFound = React.lazy(() => import('../Views/NotFound/NotFound'))

const routes = [
  // { path: '/', exact: true, name: 'Home' },

  
  { path: '/', exact: true, name: 'Home', component: Home },

  { path: '', component : NotFound},
]

export default routes
