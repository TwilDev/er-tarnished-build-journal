"use client"
import { armourProtectorParams } from '@/data/armour/armourParamProtector.json'
import { useCharacterStore } from "@/store/characterStore"

export default function useCalculatePoise() {
  const armour = useCharacterStore((state) => state.armour)
  // Will be used to implement check for Bullgoat Talisman
  const talismans = useCharacterStore((state) => state.talismans)

  const calculatePoise = () => {
    const toughnessValues: number[] = []
    for (const [key, value] of Object.entries(armour)) {
      if (value) {
        const armourPiece = armourProtectorParams.find((armourPiece) => armourPiece.ID === value.value.id)
        toughnessValues.push(armourPiece?.toughnessCorrectRate ?? 0)
      }
    }

    if (!toughnessValues.length) return 0

    // Get sum of all toughnessCorrectRates
    const total = toughnessValues.reduce((a, b) => a + b)

    /* TODO */
    // 1 Needs to be updated if the user has BullGoats Talisman to calculate the additional poise added, left at 1 for now
    const poise = total / 1
    const formattedPoise = (poise * 1000).toFixed(2)

    return formattedPoise
  }

  return calculatePoise
}