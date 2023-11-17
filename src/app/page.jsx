import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex items-center justify-center m-auto'>
      <div>
        <Link href="/dashboard">
        Dashboard
        </Link>
      </div>
    </main>
  )
}
