export type Armour = {
  head: ArmourPiece | null
  body: ArmourPiece | null
  hands: ArmourPiece | null
  legs: ArmourPiece | null
}

export type ArmourPiece = {
  label: string
  value: {
    armourType: string
    armourPiece: string
    id: number
  }
}

export type TalismanSlots = {
  slot1: Talisman | null
  slot2: Talisman | null
  slot3: Talisman | null
  slot4: Talisman | null
}

export type Talisman = {
  value: {
    Talisman: string
    ID: number
    accessoryGroup: number
  }
  label: string
}

export type Weapon = {
  ID: number
  weapon: string
  weaponSlot: string
  affinity: number
  upgradeLevel: number
  isReinforce: boolean
  isInfuse: boolean
  isUnique: boolean
}

export type WeaponSlots = {
  rh1: Weapon | null
  rh2: Weapon | null
  rh3: Weapon | null
  lh1: Weapon | null
  lh2: Weapon | null
  lh3: Weapon | null
}

export type WeaponData = {
  bothHandsAtkBonus: boolean
  castingBonusRate: string | null
  castingBonusType: string | null
  defaultPhysType: string
  id: number
  isInfuse: boolean
  isReinforce: boolean
  isUnique: true
  label: string
  specialStatusSpEffectId: number | null
  throwable: boolean
  value?: string
  waAttackElementCorrectId: null
  weapon: string
  weaponClass: string
}
