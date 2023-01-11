import MoonLoader from "react-spinners/MoonLoader"
import styled from "styled-components"

const override = {
  display: "block",
  margin: "0 auto",
}

const Wrapper = styled.div`
  position: fixed;
  z-index: 99;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`

const Loading = (props) => {
  if(!props.loading) {
    return null
  }
  return (
    <Wrapper>
      <MoonLoader
        color="#36d7b7"
        speedMultiplier={0.8}
        loading={props.loading}
        cssOverride={override}
        size={90}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Wrapper>
  )
}

export default Loading
