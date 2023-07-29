import styled from "@emotion/styled";

export const RedInput = styled.input`
    border-color: red;
`

export const BlueButton = styled.button`
    background-color: ${(props) => props.isActive ? "yellow" : ""}; //props가 넘어오고 있는데 받고 싶을 때 만들어서 씀 
    //isActive 자체가 true 일때 실행 false일 때 실행 아니므로 
    //if(isActive) 처럼 생략가능 isActive === true 굳이 이렇게 안써도 됨
    //예 onClick={props.aaa} mycolor="yellow"
`