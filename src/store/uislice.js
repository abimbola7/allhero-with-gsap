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
    }
  }
})

export const { showHeader } = uiSlice.actions;
export default uiSlice.reducer;