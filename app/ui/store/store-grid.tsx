import { fetchFilteredStore } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";

export default async function StoreGrid({
    query,
    currentPage
}: {
    query: string;
    currentPage: number;
}) {
    const storeItems = await fetchFilteredStore(query, currentPage);

    return (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 rounded-lg bg-gray-50 p-4">
            {
                storeItems?.map(item => (
                    <div key={`${item.id}`} className="flex gap-4 bg-white rounded-md p-4">
                        <>
                            <Image width={100} height={300} alt={`${item.title} by ${item.author} Book Cover`} src={item.image} className="object-contain object-top"/>
                        </>
                        <div className="info flex flex-col gap-1">
                            <div className="grow">
                                <h2 className="font-semibold">{item.title}</h2>
                                <h3 className="text-gray-500">{item.author}</h3>
                                <p className="mt-2">${item.price}</p>
                            </div>
                            <Link href={`/dashboard/store/${item.id}`} className="flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 w-fit">
                                View
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}