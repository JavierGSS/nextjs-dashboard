import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default function Page() {
  return <p className={`${lusitana.className} antialiased`}>Customers Page</p>;
}
