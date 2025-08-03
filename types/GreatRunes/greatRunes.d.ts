export type GreatRune = 'Godrick\'s Great Rune' | 'Morgott\'s Great Rune' | 'Radahn\'s Great Rune' | 'Rykard\'s Great Rune' | 'Mohg\'s Great Rune' | 'Malenia\'s Great Rune' | null

export type GreatRuneSelection = {
  selected: GreatRune | null
  active: boolean
}