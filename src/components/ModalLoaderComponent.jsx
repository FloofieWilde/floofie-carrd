import React, { useState } from 'react'
import styled from 'styled-components'
import config from '../config.json'
import MulticlickButtonWrapper from './MulticlickButtonWrapper'
import { getImageConfig, getModalConfig } from '../services/modal.service'

const ModalLoaderComponent = () => {
  const [activeModal, setActiveModal] = useState(null)

  const openModalFromButton = (item) => {
    const resolvedModal = getModalConfig(item)
    if (resolvedModal) {
      setActiveModal({
        type: 'component',
        ...resolvedModal,
        title: item?.title || 'Modal'
      })
      return
    }

    const resolvedImage = getImageConfig(item)
    if (!resolvedImage) return

    setActiveModal({
      type: 'image',
      ...resolvedImage
    })
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  const ActiveModalComponent = activeModal?.ModalComponent || null
  const isImageModal = activeModal?.type === 'image'

  const closeButton = (
    <SCloseButton type="button" onClick={closeModal} aria-label="Close modal" style={{'margin-top' : isImageModal ? '20px' : '0px'}}>
      ✕
    </SCloseButton>
  )

  return (
    <>
      <MulticlickButtonWrapper onOpenModal={openModalFromButton} />

      {
        activeModal ? (
          <SModalBackdrop onClick={closeModal}>
            {
              isImageModal ? (
                <SImageModalPanel onClick={(event) => event.stopPropagation()}>
                  {closeButton}
                  <SImageLink href={activeModal.imageSrc} target="_blank" rel="noreferrer" aria-label="Open image in new tab">
                    <SImagePreview src={activeModal.imageSrc} alt={activeModal.title || 'Image preview'} />
                  </SImageLink>
                </SImageModalPanel>
              ) : (
                <SModalPanel onClick={(event) => event.stopPropagation()}>
                  <ActiveModalComponent headerSlot={closeButton} />
                </SModalPanel>
              )
            }
          </SModalBackdrop>
        ) : null
      }
    </>
  )
}

const SModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
`

const SModalPanel = styled.div`
  width: min(960px, 100%);
  max-height: 90vh;
  border-radius: 16px;
  background: linear-gradient(
    180deg,
    ${config.theme.background}f2 0%,
    ${config.theme.background}ff 100%
  );
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.35);
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-gutter: stable both-edges;
  padding: 16px 20px;
  color: ${config.theme.text};
  box-sizing: border-box;

  * {
    box-sizing: border-box;
  }
`

const SImageModalPanel = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

const SImageLink = styled.a`
  display: inline-flex;
`

const SImagePreview = styled.img`
  max-width: calc(100vw - 80px);
  max-height: calc(100vh - 80px);
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.45);
  cursor: zoom-in;
`

const SCloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  font-weight: 700;
  cursor: pointer;
  color: ${config.theme.text};
  background: linear-gradient(
    90deg,
    ${config.theme.primary}22 0%,
    ${config.theme.secondary}22 100%
  );
  transition: background 0.25s ease-in-out;

  &:hover {
    background: linear-gradient(
      -90deg,
      ${config.theme.primary}22 0%,
      ${config.theme.secondary}22 100%
    );
  }
`

export default ModalLoaderComponent
