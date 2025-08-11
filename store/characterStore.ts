import { Armour, Talisman, TalismanSlots, Weapon, WeaponSlots } from '@/types/Equipment/equipment'
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
  setTalismans: (value: TalismanSlots) => void
  setWeapons: (value: WeaponSlots) => void
  setWeapon: (key: keyof WeaponSlots, value: Weapon) => void
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
  setTalismans: (value: TalismanSlots) => set({ talismans: value }),
  setWeapons: (value: WeaponSlots) => set({ weapons: value }),
  setWeapon: (key: keyof WeaponSlots, value: Weapon) =>
    set((state) => ({ weapons: { ...state.weapons, [key]: value } }))
}))

