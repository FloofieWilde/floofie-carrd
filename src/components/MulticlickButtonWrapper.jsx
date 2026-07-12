import React from 'react'
import config from "../config.json"
import styled from 'styled-components';
import MulticlickButton from './MulticlickButton';

const MulticlickButtonWrapper = () => {
  return (
    <SMulticlickButtonWrapper>
        {
           config?.buttons?.map(
                (button) => { return <MulticlickButton item={button} defaultColor={config.globalIconColor || 'white'} defaultTextColor={config.globalIconTextColor || 'black'} /> }
            )
        }
    </SMulticlickButtonWrapper>
  )
}

const SMulticlickButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 10px;
    box-sizing: border-box;
`

export default MulticlickButtonWrapper