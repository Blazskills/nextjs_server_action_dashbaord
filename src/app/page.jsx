import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div>
        <Link href="/dashboard">
        Dashboard
        </Link>
      </div>
    </main>
  )
}
