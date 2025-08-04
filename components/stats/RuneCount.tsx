"use client"
import { useClassStore } from "@/store/classStore";
import { useEffect, useMemo, useState } from "react";
import { Label } from "../ui/label";

export default function RuneCount() {
  const [nextLevelRunes, setNextLevelRunes] = useState(0)
  const [totalRunesRequired, setTotalRunesRequired] = useState(0)

  const baseStats = useClassStore((state) => state.baseStats)
  const level = useClassStore((state) => state.level)

  const classBaseLevel = useMemo(() => {
    return Object.values(baseStats).reduce((acc, val) => acc + val, 0) - 79
  }, [baseStats])

  function calculateCosts(level: number) {
    if (level >= 12) return Math.floor(0.02 * Math.pow(level, 3) + 3.06 * Math.pow(level, 2) + 105.6 * level - 895)
    else return Math.floor(0.0068 * Math.pow(level, 3) - 0.06 * Math.pow(level, 2) + 17.1 * level + 639) + 1
  }

  const calculateTotalCost = useMemo(() => {
    if (level <= classBaseLevel) return 0
    let total = 0
    for (let i = classBaseLevel + 1; i <= level; i++) {
      total += calculateCosts(i)
    }

    return total
  }, [classBaseLevel, level])


  useEffect(() => {
    setNextLevelRunes(calculateCosts(level + 1))
    setTotalRunesRequired(calculateTotalCost)
  }, [level, classBaseLevel, calculateTotalCost])

  return (
    <div>
      <div className='flex gap-4 items-center justify-between w-full mt-4'>
        <div>
          <Label htmlFor='level'>To Next Level</Label>
          <Label
            className='ml-2'
            htmlFor='level'
          >
            {nextLevelRunes}
          </Label>
        </div>
        <div>
          <Label htmlFor='level'>Total Runes required</Label>
          <Label
            className='ml-2'
            htmlFor='level'
          >
            {totalRunesRequired}
          </Label>
        </div>
      </div>
    </div>
  )
}