import { FC } from 'react'
import Form from './pages/form'
import * as S from './App.styles'

const App: FC = (): JSX.Element => {
  return (
    <S.Container>
      <S.ContainerContent>
        <Form />
      </S.ContainerContent>
    </S.Container>
  )
}

export default App
