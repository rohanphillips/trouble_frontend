export const rgbToHex = (rgb) => '#' + [rgb.r, rgb.g, rgb.b].map(x => {
  const hex = x.toString(16)
  return hex.length === 1 ? '0' + hex : hex
}).join('')

export const getDefaultPlayerColors = (currentPlayers, defaultColors) => {
  // return from default colors all items that are not currently being used for current players
  const filtered = defaultColors.filter(c => currentPlayers.filter(p => rgbToHex(p.color) === rgbToHex(c)).length === 0)
  return filtered
}