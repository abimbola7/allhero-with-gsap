import { configureStore } from "@reduxjs/toolkit";
import uislice from "./uislice";


const store = configureStore({
  reducer : {
    ui : uislice
  }
})

export default store