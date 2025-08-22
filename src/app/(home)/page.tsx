import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold"><Icon icon="mdi:arch" className="inline-block mr-2" width={30} height={30} /> UmmIt Docs</h1>
      <h3 className="mb-4 text-gray-400">Here you can find the documentation about all the UmmIt Side project usage like UmmItOS.</h3>
      <p className="text-fd-muted-foreground">
        You can open{' '}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>{' '}
        to start reading my documentation :)
      </p>
    </main>
  );
}