import styled from "styled-components"
import config from "../../config.json"

const SPfP = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: url(${config.pfp});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export default SPfP