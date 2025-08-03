'use client'
import { useCharacterStore } from '@/store/characterStore'
import ClassPicker from './ClassPicker'
import GreatRuneSelector from './GreatRuneSelector'
import CharacterStats from './CharacterStats'
import { Input } from '../ui/input'

export default function CharacterStatsWrapper() {
  const characterName = useCharacterStore((state) => state.characterName)
  const setCharacterName = useCharacterStore((state) => state.setCharacterName)

  return (
    <div>
      <div className="flex flex-col gap-2">
        <label htmlFor="name">Character Name</label>
        <Input
          type="text"
          id="name"
          className="p-[0.31em] border-2"
          value={characterName}
          placeholder="Maidenless Tarnished"
          onChange={(e) => setCharacterName(e.target.value)}
        />
        <ClassPicker />
        <GreatRuneSelector />
      </div>
      <div className="mt-4">
        <CharacterStats />
      </div>
    </div>
  )
}
