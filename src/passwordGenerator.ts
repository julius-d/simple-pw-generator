const adjectives = [
  'roter', 'blauer', 'gelber', 'schwarzer', 'schneller', 'langsamer', 'kleiner', 'alter', 'neuer', 'heller', 'dunkler', 'warmer', 'kalter',
  'starker', 'schwacher', 'guter', 'schlechter', 'hoher', 'tiefer', 'breiter', 'schmaler'
]

const nouns = [
  'Vogel', 'Hund', 'Baum', 'Berg', 'Fluss', 'Stern', 'Mond', 'Wind', 'Himmel'
]

const specialChars = ['!', '?']

export const generatePassword = (): string => {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)]
  const noun = nouns[Math.floor(Math.random() * nouns.length)]
  const numbers = Math.floor(1000 + Math.random() * 9000).toString()
  const specialChar = specialChars[Math.floor(Math.random() * specialChars.length)]

  return `${adjective}${noun}${numbers}${specialChar}`
}
