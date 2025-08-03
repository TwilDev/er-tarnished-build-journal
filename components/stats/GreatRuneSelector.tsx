import { useCharacterStore } from '@/store/characterStore'
import { GreatRune } from '@/types/GreatRunes/greatRunes'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { Input } from '../ui/input'

export default function GreatRuneSelector() {
  const greatRune = useCharacterStore((state) => state.greatRune.selected)
  const isActive = useCharacterStore((state) => state.greatRune.active)
  const setGreatRuneActive = useCharacterStore((state) => state.setGreatRuneActive)
  const setGreatRuneSelected = useCharacterStore((state) => state.setGreatRuneSelected)

  const greatRunes = [
    { value: "Godrick's Great Rune", label: "Godrick's Great Rune" },
    { value: "Morgott's Great Rune", label: "Morgott's Great Rune" },
    { value: "Radahn's Great Rune", label: "Radahn's Great Rune" },
    { value: "Rykard's Great Rune", label: "Rykard's Great Rune" },
    { value: "Mohg's Great Rune", label: "Mohg's Great Rune" },
    { value: "Malenia's Great Rune", label: "Malenia's Great Rune" },
  ]

  const handleChange = (selectedOption: string) => {
    setGreatRuneSelected(selectedOption ? (selectedOption as GreatRune) : null)
  }

  const toggleActiveGreatRune = () => {
    setGreatRuneActive(!isActive)
  }

  return (
    <div className="flex gap-4 align-middle">
      <Select onValueChange={handleChange}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Great Rune" />
        </SelectTrigger>
        <SelectContent>
          {greatRunes.map((gr, i) => (
            <SelectItem key={i} value={gr.value}>
              {gr.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className="flex items-center gap-4">
        <Input
          type="checkbox"
          checked={isActive}
          onChange={toggleActiveGreatRune}
          disabled={!greatRune}
        />
        <label>Activate</label>
      </div>
    </div>
  )
}
