import  {configureStore} from "@reduxjs/toolkit"
import userReducer from "../Slice/user.slice.jsx"

export const store = configureStore(
      {
        reducer : {
            user : userReducer,
        }
      }
)