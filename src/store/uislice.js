import { createSlice } from "@reduxjs/toolkit";


const initialUiState = {
  show : false
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
    }
  }
})

export const { showHeader, hideHeader } = uiSlice.actions;
export default uiSlice.reducer;