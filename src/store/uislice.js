import { createSlice } from "@reduxjs/toolkit";


const initialUiState = {
  show : false,
  showBar : false
}

const uiSlice = createSlice({
  name : "ui",
  initialState : initialUiState,
  reducers : {
    showHeader : (state, action) => {
      state.show = true
    },
    hideHeader : (state, action) => {
      state.show = false
    },
    showSideBar : (state, action) => {
      state.showBar = !state.showBar
    }
  }
})

export const { showHeader, hideHeader, showSideBar } = uiSlice.actions;
export default uiSlice.reducer;