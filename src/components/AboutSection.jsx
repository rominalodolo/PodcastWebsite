'use client'

import { useState } from 'react'
import clsx from 'clsx'

import { TinyWaveFormIcon } from '@/components/TinyWaveFormIcon'

export function AboutSection(props) {
  let [isExpanded, setIsExpanded] = useState(false)

  return (
    <section {...props}>
      <h2 className="flex items-center font-mono text-sm/7 font-medium text-seasalt">
        <TinyWaveFormIcon
          colors={['fill-violet-300', 'fill-pink-300']}
          className="h-2.5 w-2.5"
        />
        <span className="ml-2.5">About</span>
      </h2>
      <p
        className={clsx(
          'mt-2 text-base/7 text-seasalt',
          !isExpanded && 'lg:line-clamp-4',
        )}
      >
        Three dev girls share the hilarious, weird, and sometimes, a bit chaotic, side of life behind the code. From merge conflicts to coffee-fueled hotfixes, we tell the stories, bugs, and chaos you never knew were happening on the other side of the stack.
      </p>
      {!isExpanded && (
        <button
          type="button"
          className="mt-2 hidden text-sm/6 font-bold text-hotpink hover:text-pink-700 active:text-pink-900 lg:inline-block"
          onClick={() => setIsExpanded(true)}
        >
          Show more
        </button>
      )}
    </section>
  )
}
