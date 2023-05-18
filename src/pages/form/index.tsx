import { FC, useState, useEffect, ChangeEvent, FocusEvent } from 'react'
import { useDispatch } from 'react-redux'
import { emailValid } from 'utils/constants'
import { inputData } from 'redux/reducers/formSlice'
import * as S from './index.styles'

const Form: FC = (): JSX.Element => {
  const [username, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [inputTextLabel, setinputTextLabel] = useState<string>('')
  const [checkbox, setCheckBox] = useState<boolean>(false)
  const [switchOn, setSwitchOn] = useState<boolean>(false)
  const [selectOption, setSelectOtion] = useState<string>('')
  const [dropdown, setDropDown] = useState<string>('')
  const [emailError, setEmailError] = useState<string>(
    'Username field must to be filled',
  )
  const [passwordError, setPasswordError] = useState<string>(
    'Your password is between 4 and 12 characters',
  )
  const [inputTextlabelError, setinputTextlabelError] = useState<string>(
    'Error message informing me of a problem',
  )
  const [userNameDirty, setUserNameDirty] = useState<boolean>(false)
  const [passwordDirty, setPasswordDirty] = useState<boolean>(false)
  const [labelDirty, setLabelDirty] = useState<boolean>(false)
  const dispatch = useDispatch()

  useEffect(() => {
    checkData()
  }, [username, password, inputTextLabel])

  const checkData = (): void => {}

  const usernameHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setUserName(e.target.value)
    if (!emailValid.test(String(e.target.value).toLowerCase())) {
      setEmailError('Username field must to be filled')
    } else {
      setEmailError('')
    }
  }

  const passwordHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value)
    if (e.target.value.length < 4 || e.target.value.length > 12) {
      setPasswordError('Your password is between 4 and 12 characters')
    } else {
      setPasswordError('')
    }
  }

  const labelHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setinputTextLabel(e.target.value)
    if (e.target.value.length < 4) {
      setPasswordError('Пароль должен содержать не менее 4 символов')
    } else {
      setPasswordError('')
    }
  }

const checkBoxHandler = () => {
  setCheckBox(!checkbox)
}

const switchHandler = () => {
  setSwitchOn(!switchOn)
}
const radioButtonHandler = (e:ChangeEvent<HTMLInputElement>) => {
  setSelectOtion(e.target.value)
}

const selectHandler = (e:ChangeEvent<HTMLInputElement>) => {
  setDropDown(e.target.value)
}


  const blurHandler = (e: FocusEvent<HTMLInputElement>): void => {
    switch (e.target.name) {
      case 'email':
        setUserNameDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
     
    }
  }

  const data = {
    username: username,
    password: password,
    inputTextLabel: inputTextLabel,
    checkbox: checkbox,
    switchOn: switchOn,
    selectOption: selectOption,
    dropdown: dropdown,
  }

  const handlerClick = (): void => {
    dispatch(inputData(data))
    alert(JSON.stringify(data, null, 2))
  }

  return (
    <S.Container>
      <S.Label>Username</S.Label>
      <S.Input
        placeholder="Enter username"
        value={username}
        onChange={usernameHandler}
        onBlur={blurHandler}
      />
      {passwordDirty && passwordError && (
        <div className="error">{passwordError}</div>
      )}
      <S.Label>Password</S.Label>
      <S.Input
        placeholder="Enter password"
        value={password}
        onBlur={blurHandler}
        onChange={passwordHandler}
      />
      <S.Label>Input Text Label</S.Label>
      <S.Input
        placeholder="Enter text label"
        value={inputTextLabel}
        onBlur={blurHandler}
        onChange={labelHandler}
      />

      <S.LabelCheckBox>
        <S.Checkbox type="checkbox" onChange={checkBoxHandler}/>
        <S.TextLabel>Remember me</S.TextLabel>
      </S.LabelCheckBox>
      <S.Switch onClick={switchHandler} >
        <S.Selector />
      </S.Switch>
      <S.Label>
        <S.RadioButton type="radio" onChange={radioButtonHandler}/>
        Radio selection 1
      </S.Label>
      <S.Label>
        <S.RadioButton type="radio" onChange={radioButtonHandler}/>
        Radio selection 1
      </S.Label>
      <S.Label>
        <S.RadioButton type="radio" onChange={radioButtonHandler}/>
        Radio selection 1
      </S.Label>
      <S.TitleSelector>Dropdown Title</S.TitleSelector>
      <S.Select onChange={()=>selectHandler}>
        <S.Option value="Dropdown option 1">Dropdown option 1</S.Option>
        <S.Option value="Dropdown option 2">Dropdown option 2</S.Option>
        <S.Option value="Dropdown option 3">Dropdown option 3</S.Option>
      </S.Select>
      <S.ButtonContainer>
        <S.Button>Cancel</S.Button>
        <S.Button onClick={handlerClick}>Next</S.Button>
      </S.ButtonContainer>
    </S.Container>
  )
}

export default Form
