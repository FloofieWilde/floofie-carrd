import React from 'react'
import styled from 'styled-components'
import config from '../config.json'

const ExpensiveCategory = () => {
  return (
    <SExpensiveCategory>
      <SAccent aria-hidden="true" />
      <STitle>Expensive Category</STitle>
    </SExpensiveCategory>
  )
}

const SExpensiveCategory = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  padding: 12px 16px;
  box-sizing: border-box;
  border-radius: 14px;
  border: 2px solid ${config.theme.primary};
  background: linear-gradient(
    90deg,
    ${config.theme.primary}22 0%,
    ${config.theme.secondary}22 100%
  );
  color: ${config.theme.text};
`

const SAccent = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${config.theme.secondary};
  box-shadow: 0 0 0 4px ${config.theme.primary}33;
`

const STitle = styled.h2`
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.1;
  font-weight: 800;
  letter-spacing: 0.02em;
`

export default ExpensiveCategory