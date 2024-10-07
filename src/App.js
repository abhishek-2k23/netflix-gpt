import React from "react"
import Body from "./components/Body"
import AppContextProvider from "./context/AppContext"
import { Provider } from "react-redux"
import store from "./redux/store"

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <AppContextProvider>
          <Body />
        </AppContextProvider>
      </Provider>
    </div>
  )
}

export default App
