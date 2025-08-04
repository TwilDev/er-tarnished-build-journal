import { useEffect, useState } from 'react'
import { useStatsWithModifiers } from './useStatsWithModifiers'

export const useStatTotal = () => {
  const [total, setTotal] = useState<number>(0)

  const { statsWithModifiers } = useStatsWithModifiers()

  useEffect(() => {
    const statSum = Object.values(statsWithModifiers).reduce(
      (acc, val) => acc + val,
      0
    )
    setTotal(statSum)
  }, [finalStats])

  return total
}
