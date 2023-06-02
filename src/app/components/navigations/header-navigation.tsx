"use client"
import { Dispatch, Fragment, SetStateAction, lazy } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { navigation } from './list-navigation'
import { classNames } from '@/app/helpers/classname.helper'
import Image from 'next/image'
import Link from 'next/link'

type HeaderNavigation = {
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const HeaderNavigation = ({setIsOpen}: HeaderNavigation) => {
    return (
    <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-primary px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Welcome To My Shop
        </p>  
        <nav aria-label="Top" className="mx-auto max-w-7xl">
            <div className="border-b border-gray-200">
            <div className="flex h-14 items-center px-2 sm:px-6 lg:px-8">
                <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setIsOpen(true)}
                >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
                <div className="ml-4 flex lg:ml-0">
                <Link href="/">
                    <span className="sr-only">Your Company</span>
                    <Image src="https://tailwindui.com/img/logos/mark.svg" alt="tesst"
                    height={32} width={32}
                    />
                </Link>
                </div>

                <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                    {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                        {({ open }) => (
                        <>
                            <div className="relative flex">
                            <Popover.Button
                                className={classNames(
                                open
                                    ? 'border-primary text-primary'
                                    : 'border-transparent text-gray-700 hover:text-gray-800',
                                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                                )}
                            >
                                {category.name}
                            </Popover.Button>
                            </div>

                            <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500 z-30">
                                {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                <div className="absolute inset-0 top-1/2 bg-white shadow z-50" aria-hidden="true" />

                                <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                    <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                    <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                        {category.featured.map((item) => (
                                        <div key={item.name} className="group relative text-base sm:text-sm">
                                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                            <Image                                            
                                                src={item.imageSrc}
                                                alt={item.imageAlt}
                                                fill={true}
                                                priority={true}
                                            />
                                            </div>
                                            <Link href={item.href} className="mt-6 block font-medium text-gray-900 px-4">
                                            <span className="absolute inset-0 z-10" aria-hidden="true" />
                                            {item.name}
                                            </Link>
                                            <p aria-hidden="true" className="mt-1 px-4">
                                            Shop now
                                            </p>
                                        </div>
                                        ))}
                                    </div>
                                    <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                        {category.sections.map((section) => (
                                        <div key={section.name}>
                                            <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                            {section.name}
                                            </p>
                                            <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                            >
                                            {section.items.map((item) => (
                                                <li key={item.name} className="flex">
                                                <Link href={item.href} className="hover:text-gray-800">
                                                    {item.name}
                                                </Link>
                                                </li>
                                            ))}
                                            </ul>
                                        </div>
                                        ))}
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </Popover.Panel>
                            </Transition>
                        </>
                        )}
                    </Popover>
                    ))}

                    {navigation.pages.map((page) => (
                    <a
                        key={page.name}
                        href={page.href}
                        className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                        {page.name}
                    </a>
                    ))}
                </div>
                </Popover.Group>

                <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    <Link href="/signin" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Sign in
                    </Link>
                    <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                    <Link href="/signup" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Create account
                    </Link>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                    <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                    <img
                        src="https://tailwindui.com/img/flags/flag-canada.svg"
                        alt=""
                        className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">CAD</span>
                    <span className="sr-only">, change currency</span>
                    </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                    <Link href="/product" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
                    </Link>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                    <Link href="/cart" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                    </Link>
                </div>
                </div>
            </div>
            </div>
        </nav>
    </header>
    )
}

export default HeaderNavigation;