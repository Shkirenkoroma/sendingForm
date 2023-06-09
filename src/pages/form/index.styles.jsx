import styled from 'styled-components';

export const Container = styled.div`
position:absolute;
left:98px;
top:26px;
display:flex;
flex-direction:column;
width:100%;
max-width:564px;
height:calc(100vh - 200px);
margin:0 auto;
`
export const Input = styled.input`
width: 564px;
height: 56px;
margin-bottom:32px;
background: #FFFFFF;
border: 1px solid #CCCCCC;
border-radius: 8px;
font-size: 16px;
outline:none;
`

export const LabelInput = styled.label`
margin-bottom:6px;
font-weight: 600;
font-size: 12px;
line-height: 18px;
color: #666666;

`
export const Label = styled.label`
margin-bottom:32px;
font-weight: 600;
font-size: 12px;
line-height: 18px;
color: #666666;

`

export const Checkbox = styled.input`
width: 24px;
height: 24px;
background: #FFFFFF;
border: 1px solid #CCCCCC;
border-radius: 14px;
`

export const Switch = styled.span`
position:relative;
display:inline-block;
width: 49px;
height: 31px;
background: #FFFFFF;
border: 1px solid #CCCCCC;
border-radius: 32px;
margin-bottom:35px;
&:hover{
  cursor:pointer;
}
`

export const Selector = styled.span`
position:absolute;
top:1px;
left:3px;
transform:(props=> props)translateX(10px);
width: 18px;
height: 18px;
background: #F4F4F4;
border: 1px solid #CCCCCC;
border-radius: 32px;
background-color: ${props => props.switchOn};
`

export const LabelCheckBox = styled.label`
display:flex;
align-items:center;
margin-bottom:35px;

`
export const TextLabel = styled.span`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
`

export const RadioButton = styled.input`
width: 24px;
height: 24px;
background: #FFFFFF;
border: 1px solid #CCCCCC;
border-radius: 32px;
`

export const TitleSelector = styled.span`
font-weight: 600;
font-size: 12px;
margin-bottom:8px;
`
export const Select = styled.select`
width: 564px;
height: 56px;

`

export const Option = styled.option`
width: 564px;
height: 56px;
`

export const ButtonContainer = styled.div`
display:flex;
justify-content:space-between;
`

export const Button = styled.button`
width: 172px;
height: 56px;
background: transparent;
border:1px solid  #7A5CFA;
border-radius: 8px;

 &:hover{
  cursor:pointer;
  background-color: #7A5CFA;
  color:#fff;
  transition:all 500ms;
}
`

export const ErrorUserName = styled.div`
color: red;
    position: absolute;
    top: 73px;

`
export const ErrorPassword = styled.div`
color: red;
    position: absolute;
    top: 174px;

`

export const ErrorLabel = styled.div`
color: red;
    position: absolute;
    top: 274px;
}
`