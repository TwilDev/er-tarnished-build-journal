"use client"
import useVitalStats from "@/hooks/attributes/useCalculateVitalStat"
import useCalculatePoise from './../../hooks/attributes/useCalculatePoise';

export default function Vitals() {

  const calculateVitalStat = useVitalStats()
  const calculatePoise = useCalculatePoise()

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between">
        <label htmlFor="hp">HP</label>
        <label className="ml-2">{calculateVitalStat('vigor')}</label>
      </div>
      <div className="flex justify-between">
        <label htmlFor="fp">FP</label>
        <label className="ml-2">{calculateVitalStat('mind')}</label>
      </div>
      <div className="flex justify-between">
        <label htmlFor="end">Stamina</label>
        <label className="ml-2">{calculateVitalStat('endurance')}</label>
      </div>
      <div className="flex justify-between">
        <label htmlFor="eqp">Equip Load</label>
        <label className="ml-2">TODO</label>
      </div>
      <div className="flex justify-between">
        <label htmlFor="poise">Poise</label>
        <label className="ml-2">{calculatePoise()}</label>
      </div>
    </div>
  )
}
