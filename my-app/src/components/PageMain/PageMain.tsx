import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
width: 1280px;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
margin: auto;
`

export const PageMain = () => {
  return(
    <>
      <Wrapper>
        <Link to="/index">На страницу каталога</Link>
      </Wrapper>
    </>
  )
}