import { create } from 'zustand'

type State = {
  baseStats: IStats
  stats: IStats
  statChange: string[]
  level: number
  nextLevelRunes: number
}

type Actions = {
  setBaseStats: (value: IStats) => void
  setStats: (value: IStats) => void
  setStat: (key: keyof IStats, value: number) => void
  setStatChange: (value: string[]) => void
  setLevel: (value: number) => void
}

const initialBaseStats = {
  vigor: 15,
  mind: 10,
  endurance: 11,
  strength: 14,
  dexterity: 13,
  intelligence: 9,
  faith: 9,
  arcane: 7,
}

export const useClassStore = create<State & Actions>((set) => ({
  baseStats: initialBaseStats,
  stats: initialBaseStats,
  statChange: [],
  level: Object.values(initialBaseStats).reduce((acc, val) => acc + val, 0) - 79,
  nextLevelRunes: 0,
  setBaseStats: (value: IStats) => set({ baseStats: value }),
  setStat: (key: keyof IStats, value: number) =>
    set((state) => ({ stats: { ...state.stats, [key]: value } })),
  setStats: (value: IStats) => set({ stats: value }),
  setStatChange: (value: string[]) => set({ statChange: value }),
  setLevel: (value: number) => set({ level: value }),
}))
