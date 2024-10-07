import React from 'react'
import Body from './components/Body'
import AppContextProvider from './context/AppContext'

const App = () => {
  return (
    <div >
      <AppContextProvider>
        <Body />
      </AppContextProvider>
    </div>
  )
}

export default App