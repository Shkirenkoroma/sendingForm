import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IState {
  username: string
  password: string
  inputTextLabel: string
  checkbox: boolean
  switchOn: boolean
  selectOption: string
  dropdown: string
}

const formSlice = createSlice({
  name: 'form',
  initialState: {
    username: '',
    password: '',
    inputTextLabel: '',
    checkbox: false,
    switchOn: false,
    selectOption: '',
    dropdown: '',
  },
  reducers: {
    inputData: (state, action: PayloadAction<IState>) => {
      state.username = action.payload.username
      state.password = action.payload.password
      state.inputTextLabel = action.payload.inputTextLabel
      state.checkbox = action.payload.checkbox
      state.username = action.payload.username
      state.selectOption = action.payload.selectOption
      state.dropdown = action.payload.dropdown
    },
  },
})

export const formReducer = formSlice.reducer
export const { inputData } = formSlice.actions
