import React from 'react'
import styled from 'styled-components'
import LinkIcon from './LinkIcon'
import { isImageType, isModalType } from '../services/modal.service'

const MulticlickButton = ({ item, defaultColor, defaultTextColor, onOpenModal }) => {
  const renderEntry = (entry, key, withIcon = false) => {
    const isModalEntry = isModalType(entry?.type)
    const isImageEntry = isImageType(entry?.type)
    const isLinkEntry = Boolean(entry?.link)
    const isActionable = isModalEntry || isImageEntry || isLinkEntry

    const entryContent = (
      <>
        {
          withIcon && entry?.icon ? (
            <LinkIcon item={{
              icon: entry.icon,
              color: entry?.textColor || defaultTextColor
            }} />
          ) : null
        }
        {entry?.title}
      </>
    )

    if (isModalEntry || isImageEntry) {
      return (
        <button key={key} type="button" className="is-actionable" onClick={() => onOpenModal?.(entry)}>
          {entryContent}
        </button>
      )
    }

    if (!isActionable) {
      return <span key={key}>{entryContent}</span>
    }

    return (
      <a key={key} className="link is-actionable" href={entry?.link} target="_blank" rel="noreferrer">
        {entryContent}
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
      cursor: default;

      text-decoration: none;
      color: ${props => props.textColor || 'black'};
    }

    >*.is-actionable {
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        filter: brightness(1.1);
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

    @media (max-width: 720px) {
      justify-content: center;

      >* {
        border-radius: 16px;
      }
    }
`

export default MulticlickButton