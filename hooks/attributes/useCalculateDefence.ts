'use client'
import { useEffect, useState } from 'react'
import { useStatsWithModifiers } from './../useStatsWithModifiers'
import { useStatTotal } from './../useStatTotal'
import {
  defFlat,
  defStrAdj,
  defIntAdj,
  defFire,
  defHoly,
} from '@/data/defence.json'
import {
  imFlat,
  imAdj,
  robFlat,
  robAdj,
  focFlat,
  focAdj,
  vitFlat,
  vitAdj,
} from '@/data/resistances.json'

export default function useCalculateDefence() {
  const statsWithModifier = useStatsWithModifiers()
  const total = useStatTotal()

  const [defenceValues, setDefenceValues] = useState({
    physical: 0,
    strike: 0,
    slash: 0,
    pierce: 0,
    magical: 0,
    fire: 0,
    lightning: 0,
    holy: 0,
  })

  const [resistanceValues, setResistanceValues] = useState({
    immunity: 0,
    robustness: 0,
    focus: 0,
    vitality: 0
  })

  useEffect(() => {
    const calculateDefence = ({
      flat,
      adjustment,
      stat,
    }: {
      flat: number[]
      adjustment: number[]
      stat: keyof IStats
    }) => {
      const flatValue = Math.max(0, flat[total - 1])
      const adjustmentValue = Math.max(0, adjustment[statsWithModifier[stat] - 1])
      return Math.floor(flatValue + adjustmentValue)
    }

    const newDefValues = {
      physical: calculateDefence({
        flat: defFlat,
        adjustment: defStrAdj,
        stat: 'strength',
      }),
      strike: calculateDefence({
        flat: defFlat,
        adjustment: defStrAdj,
        stat: 'strength',
      }),
      slash: calculateDefence({
        flat: defFlat,
        adjustment: defStrAdj,
        stat: 'strength',
      }),
      pierce: calculateDefence({
        flat: defFlat,
        adjustment: defStrAdj,
        stat: 'strength',
      }),
      magical: calculateDefence({
        flat: defFlat,
        adjustment: defIntAdj,
        stat: 'intelligence',
      }),
      fire: calculateDefence({
        flat: defFlat,
        adjustment: defFire,
        stat: 'vigor',
      }),
      lightning: Math.floor(defFlat[Math.max(0, total - 1)] || 0),
      holy: calculateDefence({
        flat: defFlat,
        adjustment: defHoly,
        stat: 'arcane'
      })
    }

    const newResistanceValues = {
      immunity: calculateDefence({
        flat: imFlat,
        adjustment: imAdj,
        stat: 'vigor',
      }),
      robustness: calculateDefence({
        flat: robFlat,
        adjustment: robAdj,
        stat: 'endurance'
      }),
      focus: calculateDefence({
        flat: focFlat,
        adjustment: focAdj,
        stat: 'mind'
      }),
      vitality: calculateDefence({
        flat: vitFlat,
        adjustment: vitAdj,
        stat: 'arcane'
      })
    }

    setDefenceValues(newDefValues)
    setResistanceValues(newResistanceValues)
  }, [total, statsWithModifier])

  return {
    defenceValues,
    resistanceValues
  }
}
