import { useStatsWithModifiers } from "@/hooks/useStatsWithModifiers"


export default function FinalStats() {
  const { statsWithModifiers } = useStatsWithModifiers()

  return (
    <div className="flex justify-center items-top gap-4">
      <div className="flex flex-col gap-2">
        {Object.entries(statsWithModifiers).map(([statName, statValue]) => {
          return (
            <div key={statName} className="flex justify-between w-full">
              <p className="ml-4">{statValue}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
