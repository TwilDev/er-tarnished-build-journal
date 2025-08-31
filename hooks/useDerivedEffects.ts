import { useCharacterStore } from "@/store/characterStore"
import { useMemo } from "react"
import effectsData from '@/data/effects/effectsData.json';

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
        effectsData.find((effect) => effect?.Name === item?.label) || null
      if (match) effects.push(match)
    })

    // Fetch effects from great rune if active
    if (greatRune.selected && greatRune.active) {
      const runeEffect = effectsData.find(
        (effect) => effect?.Name === greatRune.selected
      )
      if (runeEffect) effects.push(runeEffect as Effect)
    }

    return effects
  }, [armour, talismans, greatRune])
}
