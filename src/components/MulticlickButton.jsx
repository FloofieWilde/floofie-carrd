import React from 'react'
import styled from 'styled-components'
import LinkIcon from './LinkIcon'

const MulticlickButton = ({item, defaultColor, defaultTextColor}) => {
  return (
    <SMulticlickButton bgColor={item?.bgColor || defaultColor} textColor={item?.textColor || defaultTextColor}>
      <a className={item?.link && "link"} href={item?.link} target='_blank' rel="noreferrer">
        { item?.icon && <LinkIcon item={{
          icon: item.icon,
          color: item?.textColor || defaultTextColor
        }} /> }
        {item?.title}
      </a>

      {
        item?.multi?.map(
          (subItem, index) => {
            return (
              <a key={index} className={subItem?.link && "link"} href={subItem
                ?.link} target='_blank' rel="noreferrer">
                {subItem?.title}
              </a>
            )
          }
        )
      }
    </SMulticlickButton>
  )
}

const SMulticlickButton = styled.div`
    display: flex;
    gap:4px;
    color: ${props => props.textColor || 'black'};
    border-radius: 50px;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    font-weight: 600;

    >* {
      padding: 5px 10px;
      background-color: ${props => props.bgColor || 'white'};

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      height: 100%;
    box-sizing: border-box;

      text-decoration: none;
      color: ${props => props.textColor || 'black'};

      &:hover {
        filter: brightness(1.1);
        transition: all 0.2s ease-in-out;
      }
    }

    >:first-child {
        border-top-left-radius: 16px;
        border-bottom-left-radius: 16px;
    }

    >:last-child {
        border-top-right-radius: 16px;
        border-bottom-right-radius: 16px;
    }
`

export default MulticlickButton