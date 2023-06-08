'use server'

// TODO: Optimizar la class de grid en el centro para compartirla con home
import Link from "next/link"

function page() {
  return (
    <div className="grid place-items-center h-full">
      <div className="border-2 border-white sm:w-6/12 text-white text-center p-4">
        <button>
          <Link href='/'>Home</Link>
        </button>
        <p>Email</p>
        <input className="text-black" type="email"/>
        <p>Password</p>
        <input className="text-black" type="password"/>
      </div>
    </div>
  )
}

export default page