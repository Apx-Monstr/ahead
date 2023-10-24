import Image from 'next/image'
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Hero from '@/components/Hero'
import BeatsText from '@/components/BeatsText'
import Quotes from '@/components/Quotes'
export default function Home() {
  return (
    <main className="max-w-screen-2xl mx-auto">
      <Header/>
      <div className='flex flex-col gap-12'>
        <Hero/>
        <BeatsText/>
        <Quotes/>
        <Footer/>
      </div>
    </main>
  )
}
