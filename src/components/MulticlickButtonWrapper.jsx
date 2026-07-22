import React from 'react'
import config from "../config.json"
import styled from 'styled-components';
import MulticlickButton from './MulticlickButton';

const MulticlickButtonWrapper = ({ onOpenModal }) => {
  return (
    <SMulticlickButtonWrapper>
        {
           config?.buttons?.map(
                (button, index) => {
                  return (
                    <MulticlickButton
                      key={`${button?.title || 'button'}-${index}`}
                      item={button}
                      defaultColor={config.globalIconColor || 'white'}
                      defaultTextColor={config.globalIconTextColor || 'black'}
                      onOpenModal={onOpenModal}
                    />
                  )
                }
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