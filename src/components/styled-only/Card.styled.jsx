import styled from "styled-components";
import config from "../../config.json"

const SCard = styled.div`
    overflow: auto;
    width: 100%;
    max-width: 660px;
    box-sizing: border-box;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${config.theme.background};
    color: ${config.theme.text};
    border-radius: 20px;

    transition: all ease-in-out .3s;

    &:hover {
        transition: all ease-in-out .15s;
        box-shadow: 8px 8px ${config.theme.primary}, 16px 16px ${config.theme.secondary};
    }

    @media (pointer:coarse) {
        box-shadow: 8px 8px ${config.theme.primary}, 16px 16px ${config.theme.secondary};
    }
`

export default SCard;