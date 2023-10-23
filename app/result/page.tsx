import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import Header from "../../components/Header"

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col justify-start m-4">
      <Header />
      <div className='flex flex-col justify-center items-center m-auto'>
        <p className='max-w-prose'>Thank you for filling the form! We look forward to working with you. Keep an eye on your email
         and a vercel representative will contact you soon.</p>
         <Link
          href="https://vercel.com/home"
          className="group mt-8 rounded-full flex space-x-1 bg-slate-50 shadow-sm ring-1 ring-gray-900/5 text-gray-600 text-sm font-medium px-10 py-2 hover:shadow-lg active:shadow-sm transition-all"
        >
          <p>Home</p>
        </Link>
      </div>
    </main>
  )
}
