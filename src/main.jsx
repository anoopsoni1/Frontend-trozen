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
import CollegeQuiz from './Components/Quiz.jsx'
import CareerRecommendation from './Components/Gemini.jsx'
import SidebarChat from './Components/Sidebar.jsx'
import CareerPathSinglePage from './Components/Carrerpath.jsx'
import CareerOptionsAfter10th from './Components/Careeropt10.jsx'
import CollegeQuiz2 from './Components/Quiz2.jsx'

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
    path: "/collagedata" ,
    element : <CollegeTable />
  } ,
  {
    path : "/dashboard" ,
    element : <Dashboard />
  } ,
  {
    path : "/quiz" ,
    element : <CollegeQuiz />
  } ,
  {
    path : "/chat" ,
    element : <CareerRecommendation />
  },
  {
    path : "/sidebarchat",
    element : <SidebarChat />
  },
  {
    path : "/career" ,
    element : <CareerPathSinglePage />
  } ,
  {
    path : "/carre" ,
    element : <CareerOptionsAfter10th />
  } ,
  {
    path : "quiz2" ,
    element : <CollegeQuiz2 />
  } 
 
]
}

])

createRoot(document.getElementById('root')).render(
      <Provider store={store}>
    <RouterProvider router = {route} />
     </Provider>
)
