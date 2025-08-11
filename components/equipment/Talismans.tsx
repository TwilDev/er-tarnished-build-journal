import { useCharacterStore } from '@/store/characterStore'
import { talismans as talismansData } from '@/data/talismans/talismanData.json'
import { useMemo } from 'react'
import { Talisman, TalismanSlots } from '@/types/Equipment/equipment'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

export default function Talismans() {
  const talismans = useCharacterStore((state) => state.talismans)
  const setTalismans = useCharacterStore((state) => state.setTalismans)

  const talismanOptions = useMemo(
    () => generateTalismanOptions(talismansData),
    []
  )

  function generateTalismanOptions(
    talismansData: {
      Talisman: string
      ID: number
      accessoryGroup: number
    }[]
  ): Talisman[] {
    return talismansData
      .filter((talisman) => talisman && talisman.Talisman)
      .map((talisman) => ({ value: talisman, label: talisman.Talisman }))
  }

  const selectTalisman = (talismanId: string, slot: keyof TalismanSlots) => {
    const selectedTalisman = talismanOptions.find(
      (talisman) => talisman.value.ID.toString() === talismanId
    )
    if (!selectedTalisman) return

    const newTalismanSlots: TalismanSlots = {
      ...talismans,
      [slot]: selectedTalisman,
    }
    setTalismans(newTalismanSlots)
  }

  const talismanSelect = (slot: keyof TalismanSlots) => (
    <Select
      onValueChange={(id) => selectTalisman(id, slot)}
      value={talismans[slot]?.value.ID.toString() || undefined}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder={`Talisman ${slot.slice(3)[1]}`}></SelectValue>
      </SelectTrigger>
      <SelectContent className="max-h-[200px]">
        {talismanOptions.map((talisman) => (
          <SelectItem
            value={talisman.value.ID.toString()}
            key={talisman.value.ID}
          >
            {talisman.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )

  return (
    <div className="w-full px-4">
      <h1>Talismans</h1>
      <div className="flex-col gap-4">
        {talismanSelect('slot1')}
        {talismanSelect('slot2')}
        {talismanSelect('slot3')}
        {talismanSelect('slot4')}
      </div>
    </div>
  )
}
