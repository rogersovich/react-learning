import styled from "styled-components"

const Button = styled.button`
  background-color: ${(props) => props.color};
  min-width: 100px;
  width: auto;
  padding: 2px 0px;
  height: 30px;
  color: #fff;
  border-radius: 5px;
  ${(props) => {
    return heightButton(props)
  }}
  &:focus {
    outline: 0;
  }
`
const heightButton = (props) => {
  if (props.large) {
    return `
      height: 35px;
      font-size: 13.5px;
    `
  } else if (props.small) {
    return `
      height: 25px;
      font-size: 11.5px;
    `
  } else {
    return `
      height: 30px;
      font-size: 12.5px;
    `
  }
}

const Btn = (props) => {
  return (
    <Button
      color={props.color}
      large={props.large}
      small={props.small}
      className={props.class}
    >
      {props.children}
    </Button>
  )
}

export default Btn
