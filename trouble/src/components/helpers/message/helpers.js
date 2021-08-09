export const createMessage = (center, active, message) => {
  return {
    center: center,
    message: {
      active: active,
      message: message
    }
  }
}