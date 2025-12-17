export default function DigitizeBoxLogoLetters({color}: {color: string}) {
  return (
    <div
      className='w-full aspect-[8/5] flex gap-[4%]'
    >
      <div className={`rounded-d bg-${color} w-1/2 h-full`}></div>
      <div className="w-1/2 flex flex-col gap-[4%]">
        <div className={`bg-${color} rounded-b-part w-full flex-1`}></div>
        <div className={`bg-${color} rounded-b-part w-full flex-1`}></div>
      </div>
    </div>
  );
}
