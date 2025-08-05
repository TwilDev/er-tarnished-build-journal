import Vitals from "./Vitals";

export default function AttributesWrapper() {
  return (
    <div className="w-[300px]">
      <div className='flex flex-col items-center mb-2'>
        <Vitals />
        <hr className="py-2"/>
        {/* <Defences /> */}
      </div>
    </div>
  )
}