import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalContextProvider } from './context/GlobalContext.jsx'
import { Provider } from 'react-redux'
import store from './redux/app/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
   <Provider store={store}>
      <GlobalContextProvider>
        <App />
      </GlobalContextProvider>
   </Provider>
 
)
