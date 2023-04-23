'use client'
import { Inter } from 'next/font/google'
import {  Navbar, About, Experience, Tech, Works } from "@/components"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="">
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
        </div>
        <div className=''>
        <About />
        <Experience />
        <Tech />
        <Works />
        </div>
      </div>
    </main>
  )
}
