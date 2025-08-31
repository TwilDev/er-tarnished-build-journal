"use client"
import coreStatsTable from '@/data/lookup.json'
import { useStatsWithModifiers } from '@/hooks/useStatsWithModifiers'
import { useDerivedEffects } from '../useDerivedEffects'
const { HP, FP, END, EQUIPLOAD } = coreStatsTable

type ValueFinder = {
  [key: string]: {
    table: number[]
    key: 'maxHpRate' | 'maxMpRate' | 'maxStaminaRate'
  }
}

export default function useVitalStats() {
  const statsWithModifiers = useStatsWithModifiers()
  const effects = useDerivedEffects()

  const lookupMapper: ValueFinder = {
    vigor: {
      table: HP,
      key: 'maxHpRate',
    },
    mind: {
      table: FP,
      key: 'maxMpRate',
    },
    endurance: {
      table: END,
      key: 'maxStaminaRate',
    },
  }
  const calculateVitalStat = (stat: keyof IStats) => {
    const lookupTable = lookupMapper[stat].table
    const modifierKey = lookupMapper[stat].key

    const calculatedAttribute =  Math.floor(lookupTable[statsWithModifiers[stat] - 1])
    // Iterate through effects and add all values matching modifier key to array
    const modifiers = effects.map(effect => effect[modifierKey])
    // Multiply all values in array together
    const modifiersTotal = modifiers.reduce((acc, val) => Number(acc) * Number(val), 1)
    // Get final stat value by multiplying lookup value by modifiers
    const finalAttribute = Math.floor(calculatedAttribute * Number(modifiersTotal))
    return finalAttribute ?? '??'
  }


  return calculateVitalStat
}
