'use client'

import Image from 'next/image'
import logo from '../assets/img/nextjs-logo.png'
import Link from 'next/link'

// This represents the home page

export default function Home() {
  return (
    <main className='grid place-items-center h-full'>
      <div className='sm:w-6/12 text-white text-center p-4'>
        <Image
          src={logo}
          alt='TODO NEXT Logo'
          width={330}
          height={330}
          className='mx-auto my-4'
        />

        <h1 
        className='text-2xl sm:text-4xl'
        >
          Hi 👋 there Welcome to TODO NEXT
        </h1>

        <button 
        className='border-2 text-xl border-white py-2 px-10 my-6 rounded-md hover:bg-white hover:text-black hover:ease-in duration-200'
        >
          <Link href="/login">Log In</Link>
        </button>
      </div>
    </main>
  )
}
