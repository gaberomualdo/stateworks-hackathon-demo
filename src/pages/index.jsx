import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Stateworks — a global network of DAOs</title>
      </Head>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  )
}
