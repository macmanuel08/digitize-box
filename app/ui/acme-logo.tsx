import { ShareIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white gap-2`}
    >
      <ShareIcon className="h-10 w-10 rotate-[15deg]" />
      <p className="text-[30px] ">DigitizeBox</p>
    </div>
  );
}
