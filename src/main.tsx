import { RouterProvider } from 'atomic-router-react'
import { allSettled, fork } from 'effector'
import { Provider } from 'effector-react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app/App'
import { appStarted } from './shared/init'
import { router } from './shared/routing'

const root = ReactDOM.createRoot(document.querySelector('#root')!)

const scope = fork()

allSettled(appStarted, { scope }).catch(() =>
  console.warn('Failed to start the app'),
)

root.render(
  <React.StrictMode>
    <Provider value={scope}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
