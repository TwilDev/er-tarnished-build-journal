import effectsData from '@/data/effects/effectsData.json'

export type Effect = {
  Name: string
  Effects: string | null
  'Overwrite Effects': string | null
  'Import Effects': string | null
  conditionHp: number
  conditionHpRate: number
  vigor: number
  mind: number
  endurance: number
  strength: number
  dexterity: number
  intelligence: number
  faith: number
  arcane: number
  maxHpRate: number
  maxMpRate: number
  maxStaminaRate: number
  equipWeightChangeRate: number
  neutralDamageCutRate: number
  blowDamageCutRate: number
  slashDamageCutRate: number
  thrustDamageCutRate: number
  magicDamageCutRate: number
  fireDamageCutRate: number
  thunderDamageCutRate: number
  darkDamageCutRate: number
  defEnemyDmgCorrectRate_Physics: number
  defEnemyDmgCorrectRate_Magic: number
  defEnemyDmgCorrectRate_Fire: number
  defEnemyDmgCorrectRate_Thunder: number
  defEnemyDmgCorrectRate_Dark: number
  defPlayerDmgCorrectRate_Physics: number
  defPlayerDmgCorrectRate_Magic: number
  defPlayerDmgCorrectRate_Fire: number
  defPlayerDmgCorrectRate_Thunder: number
  defPlayerDmgCorrectRate_Dark: number
  changePoisonResistPoint: number
  changeDiseaseResistPoint: number
  changeBloodResistPoint: number
  changeFreezeResistPoint: number
  changeSleepResistPoint: number
  changeMadnessResistPoint: number
  changeCurseResistPoint: number
  physicsAttackPowerRate: number
  magicAttackPowerRate: number
  fireAttackPowerRate: number
  thunderAttackPowerRate: number
  darkAttackPowerRate: number
  itemDropRate: number
}


// Create a lookup map for faster effect retrieval
const effectsMap = new Map<string, Effect>()

// Initialize the effects map
if (effectsData) {
  effectsData.forEach((effect: Effect) => {
    effectsMap.set(effect.Name, effect)
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