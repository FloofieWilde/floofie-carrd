import React from 'react'
import styled from 'styled-components'

const CommissionTag = ({status}) => {
  return (
    <SCommissionTag status={status}>
        <span className="dot"></span>
        {status === "1" && <span>Commissions open</span>}
        {status === "0" && <span>Commissions closed</span>}
    </SCommissionTag>
  )
}

const SCommissionTag = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 6px;

    color: ${props => props.status === "1" ? "green" : "grey"};
    border: 1px solid ${props => props.status === "1" ? "green" : "grey"};
    border-radius: 50px;
    margin-top: 4px;

    font-weight: 600;

    >.dot {
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background-color: ${props => props.status === "1" ? "green" : "grey"};
    }
`

export default CommissionTag