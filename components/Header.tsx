import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <div className='border-b-2 border-slate-900 pb-4 pl-4 flex justify-center'>
            <Link href="https://vercel.com/home">
                <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            /></Link>
            
        </div>
    )
}