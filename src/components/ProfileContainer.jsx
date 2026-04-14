import styled from "styled-components"
import SPfP from "./styled-only/PfP.styled"
import config from "../config.json"

const ProfileContainer = () => {
    return (
        <SProfile>
            <SPfP />
            <SNameGroup>
                <SName>{config.title}</SName>
                <SSubtitle>{config.subtitle}</SSubtitle>
            </SNameGroup>
            <SDescription>{config.description}</SDescription>
        </SProfile>
    )
}

const SProfile = styled.div`
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

const SName = styled.span`
    font-weight: bold;
    font-size: 2.2rem;
    display: flex;
    flex-direction: column;
`

const SSubtitle = styled.span`
    font-weight: bold;
    font-style: italic;
    font-size: 1.2rem;
`

const SNameGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`

const SDescription = styled.span`
    font-style: italic;
`

export default ProfileContainer