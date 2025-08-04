import effectData from '@/data/effects/effectData.json'

export type Effect = {
  Source: string
  vigor: number
  mind: number
  endurance: number
  strength: number
  dexterity: number
  intelligence: number
  faith: number
  arcane: number
  hpRate: number
  mpRate: number
  stamRate: number
  weightRate: number
  physCutRate: number
  strikeCutRate: number
  slashCutRate: number
  pierceCutRate: number
  magCutRate: number
  fireCutRate: number
  lightningCutRate: number
  holyCutRate: number
  physCutRateMP: number
  strikeCutRateMP: number
  slashCutRateMP: number
  pierceCutRateMP: number
  magCutRateMP: number
  fireCutRateMP: number
  lightningCutRateMP: number
  holyCutRateMP: number
  fullHpCutRate: number
  criticalHpCutRate: number
  immunityAddRate: number
  robustnessAddRate: number
  focusAddRate: number
  vitalityAddRate: number
  itemDiscovery: number
  Effects: string
}

// Create a lookup map for faster effect retrieval
const effectsMap = new Map<string, Effect>()

// Initialize the effects map
if (effectData.effectData) {
  effectData.effectData.forEach((effect: Effect) => {
    effectsMap.set(effect.Source, effect)
  })
}

export const getEffectsForItem = (itemName: string): Effect[] => {
  const effect = effectsMap.get(itemName)
  return effect ? [effect] : []
}

export const getAllEffects = (): Effect[] => {
  return Array.from(effectsMap.values())
}

export const getEffectsBySource = (sources: string[]): Effect[] => {
  return sources
    .map(source => effectsMap.get(source))
    .filter((effect): effect is Effect => effect !== undefined)
} 