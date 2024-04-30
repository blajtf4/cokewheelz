'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { useUser } from '@clerk/nextjs';

function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="font-bold absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="#features">O Nama</MobileNavLink>
            <MobileNavLink href="#testimonials">Cjenik</MobileNavLink>
            <MobileNavLink href="#pricing">Recenzije</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            {/* <MobileNavLink href="/login">Sign in</MobileNavLink> */}
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header() {
  const { user } = useUser();
  const userId = user ? user.id : null;
  console.log('userId: ', userId)

  return (
    
<header className="py-2  fixed top-30 left-0 right-0 w-full bg-lime-400  shadow-md z-50 px-600 md:px-6 lg:px-8">
  <Container>
    <nav className="relative z-50 flex justify-between">
      <div className="flex items-center md:gap-x-12">
        <Link href="/#" aria-label="Home">
          <div className="text-3xl  text-slate-900 font-bold">AUTO-OGLASI</div>
        </Link>
        <div className="hidden md:flex md:gap-x-6 font-bold">
          <NavLink href="#features">O Nama</NavLink>
          <NavLink href="#testimonials">Cjenik</NavLink>
          <NavLink href="#pricing">Recenzije</NavLink>
        </div>
      </div>
      <div className="flex items-center gap-x-5 md:gap-x-8">
        {!userId && (
          <>
            <div className="hidden md:block font-bold">
              <NavLink href="/sign-in">Kontakt</NavLink>
            </div>
            <Button href="/ponuda" color="white">
              <span className="font-bold">
                PONUDA <span className=" bg-gradient-to-r from-teal-400 to-yellow-200 lg:inline"></span>
              </span>
            </Button>
          </>
            )} 

            {userId && (
              <>
                <SignedIn>
                  <UserButton userProfileURL="/" afterSignOutUrl='/' afterSignOutAll="/" afterSignOutOneUrl="/" />
                </SignedIn>
              </>
            )} 

            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
