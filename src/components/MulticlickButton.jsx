import React from 'react'
import styled from 'styled-components'
import LinkIcon from './LinkIcon'
import { isImageType, isModalType } from '../services/modal.service'

const MulticlickButton = ({ item, defaultColor, defaultTextColor, onOpenModal }) => {
  const renderEntry = (entry, key, withIcon = false) => {
    const isModalEntry = isModalType(entry?.type)
    const isImageEntry = isImageType(entry?.type)

    if (isModalEntry || isImageEntry) {
      return (
        <button key={key} type="button" onClick={() => onOpenModal?.(entry)}>
          {
            withIcon && entry?.icon ? (
              <LinkIcon item={{
                icon: entry.icon,
                color: entry?.textColor || defaultTextColor
              }} />
            ) : null
          }
          {entry?.title}
        </button>
      )
    }

    return (
      <a key={key} className={entry?.link ? 'link' : ''} href={entry?.link} target="_blank" rel="noreferrer">
        {
          withIcon && entry?.icon ? (
            <LinkIcon item={{
              icon: entry.icon,
              color: entry?.textColor || defaultTextColor
            }} />
          ) : null
        }
        {entry?.title}
      </a>
    )
  }

  return (
    <SMulticlickButton bgColor={item?.bgColor || defaultColor} textColor={item?.textColor || defaultTextColor}>
      {renderEntry(item, item?.title || 'main-item', true)}

      {
        item?.multi?.map(
          (subItem, index) => {
            return renderEntry(subItem, `${subItem?.title || 'sub-item'}-${index}`)
          }
        )
      }
    </SMulticlickButton>
  )
}

const SMulticlickButton = styled.div`
    display: flex;
    flex-wrap: wrap;
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
      border: none;
      font: inherit;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      height: 100%;
      box-sizing: border-box;

      text-decoration: none;
      color: ${props => props.textColor || 'black'};

      
    }

    >button,
    >a.link {
      &:hover {
        filter: brightness(.9);
        transition: all 0.2s ease-in-out;
      }
      cursor: pointer;
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