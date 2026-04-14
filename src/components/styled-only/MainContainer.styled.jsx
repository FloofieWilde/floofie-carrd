import styled from "styled-components";
import config from "../../config.json"

const SMainContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  background: url(${config.background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export default SMainContainer;