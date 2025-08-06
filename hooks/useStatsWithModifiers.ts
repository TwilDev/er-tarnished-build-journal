import { useClassStore } from "@/store/classStore"
import { useDerivedEffects } from "./useDerivedEffects"
import { useEffect, useState } from "react"


export const useStatsWithModifiers = () => {
  const stats = useClassStore((state) => state.stats)
  const effects = useDerivedEffects()

  const [statsWithModifiers, setStatsWithModifiers] = useState<IStats>(stats)

  useEffect (() => {
    setStatsWithModifiers(stats)

    effects.forEach((effect) => {
      const statEffects = Object.keys(effect).filter((key) => Object.keys(stats).includes(key)) as (keyof IStats)[]
      statEffects.forEach((stat) => {
        const statValue = effect[stat]
        setStatsWithModifiers((prev) => ({ ...prev, [stat]: statValue + prev[stat] }))
      })
    })


  }, [effects, stats])

  return statsWithModifiers
}