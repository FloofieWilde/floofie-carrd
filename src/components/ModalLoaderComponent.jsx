import React, { useState } from 'react'
import styled from 'styled-components'
import config from '../config.json'
import MulticlickButtonWrapper from './MulticlickButtonWrapper'
import { getModalConfig } from '../services/modal.service'

const ModalLoaderComponent = () => {
  const [activeModal, setActiveModal] = useState(null)

  const openModalFromButton = (item) => {
    const resolvedModal = getModalConfig(item)
    if (!resolvedModal) return

    setActiveModal({
      ...resolvedModal,
      title: item?.title || 'Modal'
    })
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  const ActiveModalComponent = activeModal?.ModalComponent || null

  const closeButton = (
    <SCloseButton type="button" onClick={closeModal} aria-label="Close modal">
      ✕
    </SCloseButton>
  )

  return (
    <>
      <MulticlickButtonWrapper onOpenModal={openModalFromButton} />

      {
        ActiveModalComponent ? (
          <SModalBackdrop onClick={closeModal}>
            <SModalPanel onClick={(event) => event.stopPropagation()}>
              <ActiveModalComponent headerSlot={closeButton} />
            </SModalPanel>
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

const SCloseButton = styled.button`
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
