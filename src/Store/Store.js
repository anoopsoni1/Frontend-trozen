import  {configureStore} from "@reduxjs/toolkit"
import userReducer from "../Slice/user.slice.jsx"
import marksReducer from "../Slice/marks.slice.jsx"
export const store = configureStore(
      {
        reducer : {
            user : userReducer,
            marks: marksReducer,
        }
      }
)