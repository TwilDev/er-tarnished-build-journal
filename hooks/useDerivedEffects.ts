import { useCharacterStore } from "@/store/characterStore"
import { useMemo } from "react"
import { effectData } from '@/data/effects/effectData.json';

export const useDerivedEffects = () => {
  const armour = useCharacterStore((state) => state.armour)
  const talismans = useCharacterStore((state) => state.talismans)
  const greatRune = useCharacterStore((state) => state.greatRune)

  return useMemo(() => {
    const equipment = [
      armour.head,
      armour.body,
      armour.hands,
      armour.legs,
      talismans.slot1,
      talismans.slot2,
      talismans.slot3,
      talismans.slot4,
    ].filter(Boolean)

    const effects: Effect[] = []

    // Fetch effects from armour pieces & talismans
    equipment.forEach((item) => {
      const match =
        effectData.find((effect) => effect?.Source === item?.label) || null
      if (match) effects.push(match as Effect)
    })

    // Fetch effects from great rune if active
    if (greatRune.selected && greatRune.active) {
      const runeEffect = effectData.find(
        (effect) => effect?.Source === greatRune.selected
      )
      if (runeEffect) effects.push(runeEffect as Effect)
    }

    return effects
  }, [armour, talismans, greatRune])
}
