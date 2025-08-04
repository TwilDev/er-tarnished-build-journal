import { Armour, TalismanSlots, WeaponSlots } from '@/types/Equipment/equipment'
import { GreatRune, GreatRuneSelection } from '@/types/GreatRunes/greatRunes'
import { create } from 'zustand'

type State = {
  characterName: string
  greatRune: GreatRuneSelection
  armour: Armour
  talismans: TalismanSlots
  weapons: WeaponSlots
}

type Actions = {
  setCharacterName: (value: string) => void
  setGreatRuneSelected: (value: GreatRune) => void
  setGreatRuneActive: (active: boolean) => void
}

export const useCharacterStore = create<State & Actions>((set) => ({
  characterName: '',
  greatRune: {
    selected: null,
    active: false,
  },
  armour: {
    head: null,
    body: null,
    hands: null,
    legs: null,
  },
  talismans: {
    slot1: null,
    slot2: null,
    slot3: null,
    slot4: null,
  },
  weapons: {
    rh1: null,
    rh2: null,
    rh3: null,
    lh1: null,
    lh2: null,
    lh3: null,
  },
  setCharacterName: (value: string) => set(() => ({ characterName: value })),
  setGreatRuneSelected: (value: GreatRune) =>
    set((state) => ({
      greatRune: { ...state.greatRune, selected: value },
    })),
  setGreatRuneActive: (active: boolean) =>
    set((state) => ({
      greatRune: { ...state.greatRune, active },
    })),
}))

