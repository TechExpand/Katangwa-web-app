import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sidebarShow: false,
}

const navSlice = createSlice({
  name: 'navSlice',
  initialState,
  reducers: {
    setVisible: (state, action) => {
      state.sidebarShow = action.payload
    },
  },
})

export const { setVisible } = navSlice.actions
const navReducer = navSlice.reducer
export default navReducer
