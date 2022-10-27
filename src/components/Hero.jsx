import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

export function Hero() {
  return (
    <div className="relative pt-10 pb-20 sm:py-24">
      <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden bg-indigo-50">
        <Image
          className="absolute top-0 left-0 translate-y-[-10%] translate-x-[-55%] -scale-x-100 sm:left-1/2 sm:translate-y-[-6%] sm:translate-x-[-98%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
          src={backgroundImage}
          alt=""
          width={918}
          height={1495}
          priority
          unoptimized
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            <span className="sr-only">Stateworks - </span>Enabling global
            citizens to reinvent places they call home
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
              The next generation of cities will run on code, not handshakes by
              government officials. Stateworks is building the backbone of
              internet-native cities. We’re not talking about a virtual city in
              the metaverse, we’re talking about the real city you call home.
            </p>
            <p>
              We’re enabling DAOs to be deployed in 4m+ regions: The regional
              TCR then enables citizens to deploy DAOs linked to that region.
              Over 4 million DAOs will be deployed through Stateworks covering
              every state, city, town and village in the world. Through protocol
              rewards, citizens are financially incentivised to deploy and grow
              their regional DAO.
            </p>
          </div>
          <Button className="mt-10 w-full sm:hidden">Connect Wallet</Button>
        </div>
      </Container>
    </div>
  )
}
