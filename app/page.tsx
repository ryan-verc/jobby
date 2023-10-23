import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import Header from "../components/Header"

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col justify-start m-4">
      <Header />
      <div className='flex flex-col justify-center items-center'>
        <h2 className='text-5xl font-bold mt-8 mb-8'>Influencer Registration Portal</h2>
        <p className='text-lg text-slate-50 max-w-5xl'>Welcome to the Vercel Influencer Registration Portal - your ultimate destination to join our exciting influencer community!
        Vercel, a leading cloud provider, is now releasing merchandise, in the form of clothing, accessories and jewellery and we want to collaborate with influencers like you to promote our brand. 
        Once you register on our portal, we will reach out to you once we have a promotion suitable for your audience. 
        </p>
        <p className='border-red-900 text-red-600 bg-red-100 rounded-2xl p-2 mt-4'>All collaborations will be paid. File a report if a vercel representative tries to contact you regarding an unpaid collaboration.</p>
        <p className='border-red-900 text-red-600 bg-red-100 rounded-2xl p-2 mt-4'>We are onboarding only influencers with an Instagram page currently.</p>
        <Link
          href="/register"
          className="group mt-8 rounded-full flex space-x-1 bg-slate-50 shadow-sm ring-1 ring-gray-900/5 text-gray-600 text-sm font-medium px-10 py-2 hover:shadow-lg active:shadow-sm transition-all"
        >
          <p>Register Now</p>
        </Link>
      </div>
    </main>
  )
}
