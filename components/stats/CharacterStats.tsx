"use client"
import { useClassStore } from "@/store/classStore"
import { useState } from "react"
import FinalStats from "./FinalStats"

export default function CharacterStats() {
  const level = useClassStore((state) => state.level)
  const baseStats = useClassStore((state) => state.baseStats)
  const stats = useClassStore((state) => state.stats)
  const statChange = useClassStore((state) => state.statChange)
  const setStatChange = useClassStore((state) => state.setStatChange)
  const setStat = useClassStore((state) => state.setStat)
  const setLevel = useClassStore((state) => state.setLevel)
  
  // Local state for input value
  const [inputValues, setInputValues] = useState<Record<string, string>>({})
  
  // Ensures stats are within the range of the base stats for their starter class and 99 and ensures to avoid NaN values
  const validateStat = (label: keyof IStats, stat: number) => {
    if (stat < baseStats[label] || isNaN(stat)) {
      return baseStats[label]
    }
    if (stat > 99) {
      return 99;
    }
    return stat;
  }
  
  const trackStatChange = (stat: keyof IStats) => {
    if (!statChange.includes(stat)) {
      setStatChange([...statChange, stat])
    }
  }
  
  const handleInputChange = (stat: keyof IStats, value: string) => {
    setInputValues(prev => ({ ...prev, [stat]: value }))
    trackStatChange(stat)
  }
  
  const handleStatChange = (stat: keyof IStats, value: string) => {
    trackStatChange(stat)
    const validatedStat = validateStat(stat, parseInt(value))
    const newStats: IStats = { ...stats, [stat]: validatedStat }
    setStat(stat, validatedStat)
    setLevel(Object.values(newStats).reduce((acc, val) => acc + val, 0) - 79)
    // Clear the local input value after updating store
    setInputValues(prev => {
      const newValues = { ...prev }
      delete newValues[stat]
      return newValues
    })
  }

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between w-full mb-2">
        <label htmlFor="level">Level</label>
        <label className="text-semibold" htmlFor="level">
          {level}
        </label>
      </div>
      <div>
        <div className="flex justify-center items-top gap-4">
          <div className="flex flex-col gap-2">
            {Object.keys(baseStats).map((stat, i) => {
              const statValue: number = baseStats[stat as keyof IStats]
              return (
                <div key={i} className="flex justify-between w-full">
                  <label htmlFor={stat} className="capitalize mr-4">
                    {stat}
                  </label>
                  <p>{statValue}</p>
                </div>
              )
            })}
          </div>
          <div className="flex flex-col gap-[7px]">
            {Object.keys(stats).map((stat, i) => {
              const currentStat: number = stats[stat as keyof IStats]
              const inputValue = inputValues[stat] !== undefined ? inputValues[stat] : currentStat.toString()
              return (
                <div key={i}>
                  <input
                    type="text"
                    maxLength={2}
                    className="border-2 border-blue-400 rounded-md w-10 text-sm"
                    value={inputValue}
                    onChange={(e) =>
                      handleInputChange(stat as keyof IStats, e.target.value)
                    }
                    onBlur={(e) =>
                      handleStatChange(stat as keyof IStats, e.target.value)
                    }
                  />
                  <button
                    className="border-2 border-blue-400 rounded-md w-10 text-sm"
                    onClick={() =>
                      handleStatChange(
                        stat as keyof IStats,
                        (currentStat + 1).toString()
                      )
                    }
                  >
                    +
                  </button>
                  <button
                    className="border-2 border-blue-400 rounded-md w-10 text-sm"
                    onClick={() =>
                      handleStatChange(
                        stat as keyof IStats,
                        (currentStat - 1).toString()
                      )
                    }
                  >
                    -
                  </button>
                </div>
              )
            })}
          </div>
          <FinalStats />
        </div>
      </div>
      {/* <RuneCount /> */}
    </div>
  )
}
