import { Provider } from 'react-redux'

import Header from './components/Header/Header'
import Layout from './components/Layout/Layout'

import { store } from './store/store'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <Provider store={store}>
      <Header/>
      <Layout>
        <Outlet/>
      </Layout>
    </Provider>
  )
}

export default App
