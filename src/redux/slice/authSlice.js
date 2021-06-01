import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: "auth",
  initialState: null,
  reducers: {
    login: (_, action) => action.payload,
    logout: _ => null,
  }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer