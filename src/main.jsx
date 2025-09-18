import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './Components/Home.jsx'
import "../src/Language.js"
import LoginPage from './Components/Login.jsx'
import Signup from './Components/Signin.jsx'
import { store } from './Store/Store.js'
import { Provider } from 'react-redux'
import CollegeTable from "./Components/Quiz.jsx"
import Dashboard from './Components/Dashboard.jsx'

const route = createBrowserRouter([
{
path  : "/" ,
children : [
  {
       path : "" ,
     element : <Home />
  } ,
  {
    path : "/login" ,
    element : <LoginPage />
  } ,
  {
    path  : "/SignIn" ,
    element : <Signup />
  } ,
  {
    path: "/collages" ,
    element : <CollegeTable />
  } ,
  {
    path : "/dashboard" ,
    element : <Dashboard />
  } 
]
}

])

createRoot(document.getElementById('root')).render(
      <Provider store={store}>
    <RouterProvider router = {route} />
     </Provider>
)
