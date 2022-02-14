import React, { Fragment } from 'react'
import Header from './components/Header'
import Characters from './components/Characters'
import './components/Header.css'
import './main.sass'

const App = () => {
  return ( 
    <Fragment>
      <Header title="Rick and Morty API"></Header>
      <Characters/>
    </Fragment>
   );
}
 
export default App;