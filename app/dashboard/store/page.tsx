import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import StoreGrid from '@/app/ui/store/store-grid';
import { fetchStorePages } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Store',
};

export default async function StorePage(
    props: {
        searchParams?: Promise<{
            query?: string;
            page?: string;
        }>;
    }
) {

    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchStorePages(query);

    return (
        <main>
            <h1 className={`${lusitana.className} text-2xl mb-4`}>Browse Your Favorite Books</h1>
            <Search placeholder="Search store..." />
            <div className="my-12">
                <StoreGrid query={query} currentPage={currentPage} />
            </div>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </main>
    )
}