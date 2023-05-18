import styled from 'styled-components';

export const Container = styled.div`
position:absolute;
left:98px;
top:96px;
display:flex;
flex-direction:column;
width:100%;
max-width:564px;
height:calc(100vh - 200px);
margin:0 auto;
border:1px solid red;
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
export const Label = styled.label`
margin-bottom:8px;
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
border-radius: 4px;
`

export const Switch = styled.span`
position:relative;
display:inline-block;
width: 49px;
height: 24px;
background: #FFFFFF;
border: 1px solid #CCCCCC;
border-radius: 32px;
`

export const Selector = styled.span`
position:absolute;
width: 18px;
height: 18px;
background: #F4F4F4;
border: 1px solid #CCCCCC;
border-radius: 32px;
`

export const LabelCheckBox = styled.label`
display:flex;
align-items:center;

`
export const TextLabel = styled.span`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
`

export const RadioButton = styled.input`


`