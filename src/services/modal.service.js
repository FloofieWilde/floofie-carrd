import TemporaryTOSModal from '../components/custom/TemporaryTOSModal'

const MODAL_REGISTRY = {
  TemporaryTOSModal
}

const MODAL_TYPES = new Set(['modal', 'component'])

export const isModalType = (type) => {
  if (!type) return false
  return MODAL_TYPES.has(String(type).toLowerCase())
}

export const getModalConfig = (item) => {
  if (!item || !isModalType(item.type)) return null

  const modalName = item.modal || item.component
  if (!modalName) return null

  const ModalComponent = MODAL_REGISTRY[modalName]
  if (!ModalComponent) return null

  return {
    modalName,
    ModalComponent
  }
}
