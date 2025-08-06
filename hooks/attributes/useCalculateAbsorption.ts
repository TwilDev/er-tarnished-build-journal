"use client"
import { armourProtectorParams } from '@/data/armour/armourParamProtector.json'
import { useCharacterStore } from '@/store/characterStore'
import { Armour, ArmourProtector } from '@/types/Equipment/equipment'
import { useEffect, useState } from 'react'
import { useDerivedEffects } from '../useDerivedEffects'

type DamageTypeKey =
  | 'physical'
  | 'strike'
  | 'slash'
  | 'pierce'
  | 'magical'
  | 'fire'
  | 'lightning'
  | 'holy' 

const DAMAGE_MAP: Record<
  DamageTypeKey,
  { armourKey: string; effectKey: keyof Effect }
> = {
  physical: { armourKey: 'neutralDamageCutRate', effectKey: 'physCutRate' },
  strike: { armourKey: 'blowDamageCutRate', effectKey: 'strikeCutRate' },
  slash: { armourKey: 'slashDamageCutRate', effectKey: 'slashCutRate' },
  pierce: { armourKey: 'thrustDamageCutRate', effectKey: 'pierceCutRate' },
  magical: { armourKey: 'magicDamageCutRate', effectKey: 'magCutRate' },
  fire: { armourKey: 'fireDamageCutRate', effectKey: 'fireCutRate' },
  lightning: {
    armourKey: 'thunderDamageCutRate',
    effectKey: 'lightningCutRate',
  },
  holy: { armourKey: 'darkDamageCutRate', effectKey: 'holyCutRate' },
}

// Takes all armour and locates all values for each absorption value associated with the piece, multiplying together to return a final absorption
function calculateAbsorption({armour, damageType}: {armour: Armour, damageType: string}): number {
  const damageCutRates = Object.values(armour).map((value) => {
    if (!value) return 1
    const armourPiece: ArmourProtector | undefined = armourProtectorParams.find(
      (a) => a.ID === value?.value?.id
    )
    const damageKey = DAMAGE_MAP[damageType as DamageTypeKey]?.armourKey
    return armourPiece && damageKey ? armourPiece[damageKey as keyof ArmourProtector] as number : 1
  })
  return damageCutRates.length ? damageCutRates.reduce((a, b) => a * b, 1) : 1
}

// Takes all active effects and the damage type to lookup and multiplies all damageType values for effects together
function calculateEffectAbsorption({ effects, damageType }: { effects: Effect[], damageType: keyof Effect }): number {
  return effects.length
  ? effects.reduce((total, e) => total * (Number(e?.[damageType]) || 1), 1)
  : 1
}

export default function useCalculateAbsorption() {
  const armour = useCharacterStore((state) => state.armour)
  const effects = useDerivedEffects()

  const [absorptionValues, setAbsorptionValues] = useState<Record<DamageTypeKey, string>>({
    physical: '0.000',
    strike: '0.000',
    slash: '0.000',
    pierce: '0.000',
    magical: '0.000',
    fire: '0.000',
    lightning: '0.000',
    holy: '0.000',
  })

  useEffect(() => {
    const newValues = {} as Record<DamageTypeKey, string>

    for (const key in DAMAGE_MAP) {
      const damageKey = key as DamageTypeKey
      const { armourKey, effectKey } = DAMAGE_MAP[damageKey]

      const armourAbs = calculateAbsorption({ armour, damageType: armourKey })
      const effectsAbs = calculateEffectAbsorption({ effects, damageType: effectKey })

      newValues[damageKey] = (100 * (1 - armourAbs * effectsAbs)).toFixed(3)
    }

    setAbsorptionValues(newValues)
  }, [effects, armour])

  return absorptionValues
}
