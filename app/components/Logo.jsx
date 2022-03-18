import React from 'react';
import { TerminalIcon } from "@heroicons/react/outline";
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/">
        <a className='flex items-center space-x-1 text-blue-600'>
            <TerminalIcon className='w-8 h-8 flex-shrink-0' />
            <span className='font-bold text-lg tracking-tight whitespace-nowrap'>Devs Blog</span>
        </a>
    </Link>
  )
}
