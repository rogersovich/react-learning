import styled from "styled-components"

const Wrapper = styled.div`
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

const ModalContent = styled.div`
  width: 500px;
  background-color: #fff;
`

const ModalProduct = (props) => {
  if (!props.show) {
    return null
  }
  return (
    <Wrapper className="modal-open">
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <div className="tw-px-4 tw-py-3 tw-border-b tw-border-gray-200 fcb ">
          <b>{props.title ? props.title : "Ini title"}</b>
          <button onClick={props.onClose}>close</button>
        </div>
        {props.children}
      </ModalContent>
    </Wrapper>
  )
}

export default ModalProduct
