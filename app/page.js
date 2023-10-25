import Image from 'next/image'
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Hero from '@/components/Hero'
import BeatsText from '@/components/BeatsText'
import Quotes from '@/components/Quotes'
import PrivacyMsg from '@/components/PrivacyMsg'
import Vacancy from '@/components/Vacancy'
import Work from '@/components/Work'
import BeBest from '@/components/BeBest'
import Rate from '@/components/Rate'
import Meet from '@/components/Meet'
import SelfImprove from '@/components/SelfImprove'
export default function Home() {
  return (
    <main className="max-w-screen-2xl mx-auto">
      <Header/>
      <div className='flex flex-col gap-12'>
        <Hero/>
        <BeatsText/>
        <Quotes/>
        <BeBest/>
        <Rate/>
        <Meet/>
        <SelfImprove/>
        <PrivacyMsg/>
        <Work/>
        <Vacancy/>
        <Footer/>
      </div>
    </main>
  )
}
