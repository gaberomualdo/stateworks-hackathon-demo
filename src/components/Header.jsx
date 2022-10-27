import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { Logo } from '@/components/Logo'
import { useState } from 'react'

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import Modal from './Modal'

export function Header() {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="relative z-40 pb-11 lg:pt-11">
        <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
          <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
            <Logo className="h-12 w-auto text-slate-900" />
          </div>
          <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto whitespace-nowrap border-b border-blue-600/10 py-4 font-mono text-sm text-blue-600 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
            <div className="mx-auto flex items-center gap-4 px-4">
              <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
              <p>Built by Stateworks – Gabriel, Joe, Manny, and Team</p>
              <DiamondIcon className="h-1.5 w-1.5 overflow-visible fill-current stroke-current" />
            </div>
          </div>
          <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
            {isConnected ? (
              <Button onClick={() => setOpen(true)}>
                Get&nbsp;Started&nbsp;As&nbsp;{address.slice(0, 6)}...
                {address.slice(-4)}
              </Button>
            ) : (
              <Button
                onClick={() => {
                  connect()
                  setOpen(true)
                }}
              >
                Get&nbsp;Started&nbsp;—&nbsp;Connect&nbsp;Wallet
              </Button>
            )}
          </div>
        </Container>
      </header>
      <Modal open={open} setOpen={setOpen} />
    </>
  )
}
