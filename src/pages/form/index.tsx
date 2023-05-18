import { FC, useState, useEffect, ChangeEvent, FocusEvent } from 'react'
import { useDispatch } from 'react-redux'
import { inputData } from 'redux/reducers/formSlice'
import * as S from './index.styles'

const Form: FC = (): JSX.Element => {
  const [username, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [inputTextLabel, setinputTextLabel] = useState<string>('')
  const [checkbox, setCheckBox] = useState<boolean>(false)
  const [switchOn, setSwitchOn] = useState<boolean>(false)
  const [selectOption, setSelectOtion] = useState<string>('Radio selection 1')
  const [dropdown, setDropDown] = useState<string>('Dropdown option 1')
  const [usernameError, setUserNameError] = useState<string>(
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
    if (!e.target.value) {
      setUserNameError('Username field must to be filled')
    } else {
      setUserNameError('')
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
    if (!e.target.value) {
      setinputTextlabelError('Пароль должен содержать не менее 4 символов')
    } else {
      setinputTextlabelError('')
    }
  }

  const checkBoxHandler = () => {
    setCheckBox(!checkbox)
  }

  const switchHandler = () => {
    setSwitchOn(!switchOn)
  }

  const blurHandler = (e: FocusEvent<HTMLInputElement>): void => {
    switch (e.target.name) {
      case 'username':
        setUserNameDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
      case 'label':
        setLabelDirty(true)
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
      <S.LabelInput>Username</S.LabelInput>
      <S.Input
        placeholder="Enter username"
        value={username}
        onChange={usernameHandler}
        onBlur={blurHandler}
        name="username"
      />
      {userNameDirty && usernameError && (
        <S.ErrorUserName>{usernameError}</S.ErrorUserName>
      )}
      <S.LabelInput>Password</S.LabelInput>
      <S.Input
        placeholder="Enter password"
        value={password}
        onBlur={blurHandler}
        onChange={passwordHandler}
        name="password"
      />
      {passwordDirty && passwordError && (
        <S.ErrorPassword>{passwordError}</S.ErrorPassword>
      )}
      <S.LabelInput>Input Text Label</S.LabelInput>
      <S.Input
        placeholder="Enter text label"
        value={inputTextLabel}
        onBlur={blurHandler}
        onChange={labelHandler}
        name="label"
      />

      {labelDirty && inputTextlabelError && (
        <S.ErrorLabel>{inputTextlabelError}</S.ErrorLabel>
      )}
      <S.LabelCheckBox>
        <S.Checkbox type="checkbox" onChange={checkBoxHandler} />
        <S.TextLabel>Remember me</S.TextLabel>
      </S.LabelCheckBox>
      <S.Switch onClick={switchHandler}>
        <S.Selector />
      </S.Switch>
      <S.Label>
        <S.RadioButton
          type="radio"
          onChange={() => setSelectOtion('Radio selection 1')}
          checked={selectOption === 'Radio selection 1'}
        />
        Radio selection 1
      </S.Label>
      <S.Label>
        <S.RadioButton
          type="radio"
          onChange={() => setSelectOtion('Radio selection 2')}
          checked={selectOption === 'Radio selection 2'}
        />
        Radio selection 1
      </S.Label>
      <S.Label>
        <S.RadioButton
          type="radio"
          onChange={() => setSelectOtion('Radio selection 3')}
          checked={selectOption === 'Radio selection 3'}
        />
        Radio selection 1
      </S.Label>
      <S.TitleSelector>Dropdown Title</S.TitleSelector>
      <S.Select value={dropdown} onChange={(e) => setDropDown(e.target.value)}>
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
