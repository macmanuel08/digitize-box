
import { fetchStoreItemById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export const metadata: Metadata = {
  title: 'Edit Invoice',
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const item = await fetchStoreItemById(id);

  if (!item) {
    notFound();
  }

  const { author, title, price, stock_status, image, description, category } = item;

  return (
    <main>
      <div className="rounded-lg bg-gray-50 p-4 md:h-[90vh]">
        <div className='bg-white rounded-md p-4'>
            <div key={`${item.id}`} className='flex gap-4'>
                <>
                    <Image width={100} height={300} alt={`${title} by ${author} Book Cover`} src={image} className="object-contain object-top"/>
                </>
                <div className="info flex flex-col gap-1">
                    <div className="grow">
                        <h2 className="font-semibold">{title}</h2>
                        <h3 className="text-gray-500">{author}</h3>
                        <p className={clsx("font-semibold uppercase text-xs tracking-wider", stock_status == "in_stock" ? "text-green-600" : "text-red-700")}>{stock_status == "in_stock" ? "Available" : "Out of Stock"}</p>
                        <p className="mt-2">${price}</p>
                    </div>
                    <Link href={`/dashboard/store/${item.id}/#`} className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 w-fit">
                        <ShoppingCartIcon className="h-[18px] w-[18px] text-white peer-focus:text-gray-900 inline-block mr-2" /> Add to Cart
                    </Link>
                    <p className='font-italic text-xs text-gray-300 mt-2'>*Added to cart (feature disabled in demo)</p>
                </div>
            </div>
            <div className="mt-9">
                <p className="text-gray-600">
                    <span className='text-gray-400 uppercase text-sm'>{category}</span><br />
                    {description}
                </p>
            </div>
        </div>
      </div>
    </main>
  );
}
