"use client"
import useCalculateAbsorption from "@/hooks/attributes/useCalculateAbsorption";
import useCalculateDefence from './../../hooks/attributes/useCalculateDefence';

export default function Defences() {
  const absorptionValues = useCalculateAbsorption()
  const { defenceValues, resistanceValues } = useCalculateDefence()

  return (
    <div className="w-full">
    <label htmlFor="def">Defence/Absorption</label>
    <div className="mt-2">
      <div className="flex justify-between">
        <label htmlFor="physicalDefence">Physical Defence</label>
        <div>
          <label className='ml-2'>{ defenceValues.physical || 0 }</label>
          <label className='ml-2'>/ { absorptionValues.physical || '0.000' }</label>
        </div>
      </div>
      <div className="flex justify-between">
        <label htmlFor="physicalDefence">VS Strike</label>
        <div>
          <label className='ml-2'>{ defenceValues.strike || 0 }</label>
          <label className='ml-2'>/ { absorptionValues.strike || '0.000' }</label>
        </div>
      </div>
      <div className="flex justify-between">
        <label htmlFor="physicalDefence">VS Slash</label>
        <div>
          <label className='ml-2'>{ defenceValues.slash || 0 }</label>
          <label className='ml-2'>/ { absorptionValues.slash || '0.000' }</label>
        </div>
      </div>
      <div className="flex justify-between">
        <label htmlFor="physicalDefence">VS Pierce</label>
        <div>
          <label className='ml-2'>{ defenceValues.pierce || 0 }</label>
          <label className='ml-2'>/ { absorptionValues.pierce || '0.000' }</label>
        </div>
      </div>
      <div className="flex justify-between">
        <label htmlFor="magicDefence">Magic Defence</label>
        <div>
          <label className='ml-2'>{ defenceValues.magical || 0 }</label>
          <label>/ { absorptionValues.magical || '0.000' }</label>
        </div>
      </div>
      <div className="flex justify-between">
        <label htmlFor="fireDefence">Fire Defence</label>
        <div>
          <label className='ml-2'>{ defenceValues.fire || 0 }</label>
          <label>/ { absorptionValues.fire || '0.000' }</label>
        </div>
      </div>
      <div className="flex justify-between">
        <label htmlFor="lightningDefence">Lightning Defence</label>
        <div>
          <label className='ml-2'>{ defenceValues.lightning || 0 }</label>
          <label>/ { absorptionValues.lightning || '0.000' }</label>
        </div>
      </div>
      <div className="flex justify-between">
        <label htmlFor="holyDefence">Holy Defence</label>
        <div>
          <label className='ml-2'>{ defenceValues.holy || 0 }</label>
          <label>/ { absorptionValues.holy || '0.000' }</label>
        </div>
      </div>
    </div>
    <div className="mt-2">
      <label htmlFor="resistances">Resistances</label>
      <div className="flex justify-between mt-1">
        <label htmlFor="immunityResistance">Immunity</label>
        <label className='ml-2'>{ resistanceValues.immunity || 0 }</label>
      </div>
      <div className="flex justify-between">
        <label htmlFor="robustnessResistance">Robustness</label>
        <label className='ml-2'>{ resistanceValues.robustness || 0 }</label>
      </div>
      <div className="flex justify-between">
        <label htmlFor="focusResistance">Focus</label>
        <label className='ml-2'>{ resistanceValues.focus || 0 }</label>
      </div>
      <div className="flex justify-between">
        <label htmlFor="vitalityResistance">Vitality</label>
        <label className='ml-2'>{ resistanceValues.vitality || 0 }</label>
      </div>
    </div> 
  </div>
  )
}