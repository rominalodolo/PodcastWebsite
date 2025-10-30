import Link from 'next/link'

import { Waveform } from '@/components/Waveform'

export default function NotFound() {
  return (
    <main className="relative flex h-full items-center py-36 lg:px-8">
      <Waveform className="absolute top-0 left-0 h-20 w-full" />
      <div className="relative mx-auto flex w-full max-w-2xl flex-col items-center px-4 sm:px-6 lg:px-0">
        <p className="font-mono text-sm/7 text-turquoise">404</p>
        <h1 className="mt-4 text-lg font-bold text-seasalt">
          Page not found
        </h1>
        <p className="mt-2 text-base/7 text-gray-300">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Link
          href="/"
          className="mt-4 text-sm/6 font-bold text-hotpink hover:text-teal-300 active:text-teal-100"
        >
          Go back home
        </Link>
      </div>
    </main>
  )
}
