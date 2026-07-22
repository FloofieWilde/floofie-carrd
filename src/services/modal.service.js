const buildModalRegistry = () => {
  const registry = {}

  // Auto-register every component inside src/components/custom.
  const customComponentContext = require.context('../components/custom', true, /\.(js|jsx)$/)

  customComponentContext.keys().forEach((key) => {
    const module = customComponentContext(key)
    const component = module?.default
    if (!component) return

    const fileName = key.replace('./', '')
    const componentName = fileName.replace(/\.(js|jsx)$/, '')
    registry[componentName] = component
  })

  return registry
}

const MODAL_REGISTRY = buildModalRegistry()

const MODAL_TYPES = new Set(['modal', 'component'])
const IMAGE_TYPES = new Set(['image'])

export const isModalType = (type) => {
  if (!type) return false
  return MODAL_TYPES.has(String(type).toLowerCase())
}

export const isImageType = (type) => {
  if (!type) return false
  return IMAGE_TYPES.has(String(type).toLowerCase())
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

export const getImageConfig = (item) => {
  if (!item || !isImageType(item.type)) return null

  const imageSrc = item.link || item.src
  if (!imageSrc) return null

  return {
    title: item.title || 'Image preview',
    imageSrc
  }
}

export const getRegisteredModalNames = () => Object.keys(MODAL_REGISTRY)
