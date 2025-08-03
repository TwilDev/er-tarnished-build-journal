import baseClasses from '@/data/classes.json'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { useClassStore } from '@/store/classStore'

export default function ClassPicker() {

  const stats = useClassStore((state) => state.stats)
  const baseStats = useClassStore((state) => state.baseStats)
  const statChange = useClassStore((state) => state.statChange)
  const setStatChange = useClassStore((state) => state.setStatChange)
  const setBaseStats = useClassStore((state) => state.setBaseStats)
  const setStats = useClassStore((state) => state.setStats)
  const setLevel = useClassStore((state) => state.setLevel)
  const setTotal = useClassStore((state) => state.setTotal)

  const updateClassOnChange = (newClass: string) => {
    const newBaseStats = { ...baseClasses[newClass as keyof typeof baseClasses] }
    const newClassStats = { ...baseClasses[newClass as keyof typeof baseClasses] }
    const changedStats: string[] = []

    // Validate stats on change based on what user has changed if stat is higher than new class stats keep it if it is lower then use new classes stats
    if (statChange.length > 0) {
      statChange.forEach((statKey) => {
        if (newClassStats[statKey as keyof IStats] <= stats[statKey as keyof IStats]) {
          console.log("stat", statKey, "is currently", stats[statKey as keyof IStats], "and new class stats is", newClassStats[statKey as keyof IStats])
          newClassStats[statKey as keyof IStats] = stats[statKey as keyof IStats]
          changedStats.push(statKey)
        }
      })
    }

    // Keep record of stats that remain changed after class change
    setStatChange(changedStats)

    setBaseStats(newBaseStats)
    setStats(newClassStats)

    const statSum = Object.values(newClassStats).reduce((acc, val) => acc + val, 0)
    const level = statSum - 79
    setTotal(statSum)
    setLevel(level)
  }

  // Find the current class based on baseStats
  const getCurrentClass = () => {
    for (const [className, classStats] of Object.entries(baseClasses)) {
      if (JSON.stringify(classStats) === JSON.stringify(baseStats)) {
        return className
      }
    }
    return undefined
  }

  return (
    <Select onValueChange={updateClassOnChange} value={getCurrentClass()}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select Class" />
      </SelectTrigger>
      <SelectContent className="w-full">
        {Object.keys(baseClasses).map((cl, i) => (
          <SelectItem key={i} value={cl}>
            {cl}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
