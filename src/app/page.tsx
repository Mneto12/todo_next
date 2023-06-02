import Image from 'next/image'

// This represents the home page

export default function Home() {
  return (
    <main className='grid place-items-center h-full'>
      <div className='border-2 border-white w-6/12 text-white text-center p-4'>
        <p>This is a img</p>
        <h1>Hi, Welcome tho random Quotes for your life</h1>
        <button>Generate</button>
      </div>
    </main>
  )
}
