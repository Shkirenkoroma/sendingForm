import { FC, useState, useEffect, ChangeEvent, FocusEvent } from 'react'
import { useDispatch } from 'react-redux'
import { emailValid } from 'utils/constants'
import { inputData } from 'redux/reducers/formSlice'
import * as S from './index.styles'

const Form: FC = (): JSX.Element => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [label, setLabel] = useState<string>('')
  const [pathTo, setPathTo] = useState<string>('')
  const [emailError, setEmailError] = useState<string>(
    'E-mail не может быть пустым',
  )
  const [passwordError, setPasswordError] = useState<string>(
    'Пароль не может быть пустым',
  )
  const [emailDirty, setEmailDirty] = useState<boolean>(false)
  const [passwordDirty, setPasswordDirty] = useState<boolean>(false)
  const dispatch = useDispatch()

  useEffect(() => {
    checkData()
  }, [email, password])

  const checkData = (): void => {}

  const emailHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value)
    if (!emailValid.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный e-mail')
    } else {
      setEmailError('')
    }
  }

  const passwordHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value)
    if (e.target.value.length < 4) {
      setPasswordError('Пароль должен содержать не менее 4 символов')
    } else {
      setPasswordError('')
    }
  }
  const labelHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setLabel(e.target.value)
    if (e.target.value.length < 4) {
      setPasswordError('Пароль должен содержать не менее 4 символов')
    } else {
      setPasswordError('')
    }
  }

  const blurHandler = (e: FocusEvent<HTMLInputElement>): void => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
    }
  }

  // const handleClick = (): void => {
  //   dispatch(inputData())
  // }

  return (
    <S.Container>
      <S.Label>Username</S.Label>
      <S.Input
        placeholder="Enter username"
        value={email}
        onChange={emailHandler}
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
        value={label}
        onBlur={blurHandler}
        onChange={labelHandler}
      />
      <input type="checkbox" />
    </S.Container>
  )
}

export default Form
