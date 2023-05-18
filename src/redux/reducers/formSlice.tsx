import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const formSlice = createSlice({
  name: 'form',
  initialState: {
    login: '',
    password: '',
  },
  reducers: {
    inputData: (state, action: PayloadAction<string>) => {
      state.login = action.payload
    },
  },
})

export const formReducer = formSlice.reducer
export const { inputData } = formSlice.actions
