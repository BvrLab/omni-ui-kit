import React, { Fragment } from 'react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { clsx } from 'clsx'
import { ColorScheme } from '@/components/constant'
import IconButton from '@/components/buttons/IconButton'

export interface NavigationItem {
    name: string
    href: string
    icon?: React.ElementType
    isCurrent?: boolean
    children?: NavigationItem[]
}

export type NavProps = {
    items: NavigationItem[]
    activeColor?: ColorScheme
    textColor?: ColorScheme
    bgColorClass?: string
    logoUrl?: string
} & React.ComponentPropsWithoutRef<'nav'>

export const Nav = React.forwardRef(
    ({
        items,
        logoUrl,
        activeColor = 'indigo',
        textColor = 'gray',
        bgColorClass = 'bg-white',
        ...props
    }: NavProps) => {
        return (
            <Disclosure
                as="nav"
                className={clsx('shadow', bgColorClass)}
                {...props}
            >
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="flex h-16 justify-between">
                                <div className="flex">
                                    <div className="flex flex-shrink-0 items-center">
                                        <img
                                            className="h-8 w-auto"
                                            src={logoUrl}
                                            alt="Company Logo"
                                        />
                                    </div>
                                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                        {items.map((item, index) => (
                                            <a
                                                key={index}
                                                href={item.href}
                                                className={clsx(
                                                    item.isCurrent
                                                        ? `border-${activeColor}-500 text-${activeColor}-600`
                                                        : `border-transparent text-${textColor}-500 hover:border-${textColor}-300 hover:text-${textColor}-700`,
                                                    'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
                                                )}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                {/* Mobile menu button */}
                                <div className="-mr-2 flex items-center sm:hidden">
                                    <Disclosure.Button
                                        className={clsx(
                                            'relative inline-flex items-center justify-center'
                                        )}
                                    >
                                        <IconButton
                                            icon={open ? XMarkIcon : Bars3Icon}
                                            srText={'Open main menu'}
                                            size={'lg'}
                                            colorScheme={'gray'}
                                        ></IconButton>
                                    </Disclosure.Button>
                                </div>
                                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                                    {/* additional content like profile dropdown */}
                                </div>
                            </div>
                        </div>

                        {/*mobile view*/}
                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 pb-3 pt-2">
                                {items.map((item, index) => (
                                    <Disclosure.Button
                                        key={index}
                                        as="a"
                                        href={item.href}
                                        className={clsx(
                                            item.isCurrent
                                                ? `bg-${activeColor}-50 border-${activeColor}-500 text-${activeColor}-700`
                                                : `border-transparent text-${textColor}-500 hover:border-${textColor}-300 hover:text-${textColor}-700`,
                                            'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                                        )}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        )
    }
)

Nav.displayName = 'Nav'
export default Nav
