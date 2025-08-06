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
          <label className='ml-2'>{ defenceValues.physical }</label>
          <label className='ml-2'>/ { absorptionValues.physical }</label>
        </div>
      </div>
      <div className="flex justify-between">
        <label htmlFor="physicalDefence">VS Strike</label>
        <div>
          <label className='ml-2'>{ defenceValues.strike }</label>
          <label className='ml-2'>/ { absorptionValues.strike }</label>
        </div>
      </div>
      <div className="flex justify-between">
        <label htmlFor="physicalDefence">VS Slash</label>
        <div>
          <label className='ml-2'>{ defenceValues.slash }</label>
          <label className='ml-2'>/ { absorptionValues.slash }</label>
        </div>
      </div>
      <div className="flex justify-between">
        <label htmlFor="physicalDefence">VS Pierce</label>
        <div>
          <label className='ml-2'>{ defenceValues.pierce }</label>
          <label className='ml-2'>/ { absorptionValues.pierce }</label>
        </div>
      </div>
      <div className="flex justify-between">
        <label htmlFor="magicDefence">Magic Defence</label>
        <div>
          <label className='ml-2'>{ defenceValues.magical }</label>
          <label>/ { absorptionValues.magical }</label>
        </div>
      </div>
      <div className="flex justify-between">
        <label htmlFor="fireDefence">Fire Defence</label>
        <div>
          <label className='ml-2'>{ defenceValues.fire }</label>
          <label>/ { absorptionValues.fire }</label>
        </div>
      </div>
      <div className="flex justify-between">
        <label htmlFor="lightningDefence">Lightning Defence</label>
        <div>
          <label className='ml-2'>{ defenceValues.lightning }</label>
          <label>/ { absorptionValues.lightning }</label>
        </div>
      </div>
      <div className="flex justify-between">
        <label htmlFor="holyDefence">Holy Defence</label>
        <div>
          <label className='ml-2'>{ defenceValues.holy }</label>
          <label>/ { absorptionValues.holy }</label>
        </div>
      </div>
    </div>
    <div className="mt-2">
      <label htmlFor="resistances">Resistances</label>
      <div className="flex justify-between mt-1">
        <label htmlFor="immunityResistance">Immunity</label>
        <label className='ml-2'>{ resistanceValues.immunity }</label>
      </div>
      <div className="flex justify-between">
        <label htmlFor="robustnessResistance">Robustness</label>
        <label className='ml-2'>{ resistanceValues.robustness }</label>
      </div>
      <div className="flex justify-between">
        <label htmlFor="focusResistance">Focus</label>
        <label className='ml-2'>{ resistanceValues.focus }</label>
      </div>
      <div className="flex justify-between">
        <label htmlFor="vitalityResistance">Vitality</label>
        <label className='ml-2'>{ resistanceValues.vitality }</label>
      </div>
    </div> 
  </div>
  )
}