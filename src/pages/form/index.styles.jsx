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