"use server"
import AttributesWrapper from "@/components/attributes/AttributesWrapper"
import EquipmentWrapper from "@/components/equipment/EquipmentWrapper"
import CharacterStatsWrapper from "@/components/stats/CharacterStatsWrapper"

export default async function Home() {
  return (
    <div className="p-4">
      <h1>Elden Ring Character Builder</h1>
      <div className="grid grid-cols-5 gap-6">
        <CharacterStatsWrapper />
        {/* <div className="flex w-[450px] flex-col items-center">
          <ArmourSelection />
          <TalismanSelection />
          <WeaponSelection />
        </div> */}
        <EquipmentWrapper />
        <div className="flex w-[350px] flex-col items-center justify-center gap-4">
          <AttributesWrapper />
        </div>
      </div>
    </div>
  )
}
