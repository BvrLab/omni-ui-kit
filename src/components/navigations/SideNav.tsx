import React from 'react'
import clsx from 'clsx'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Disclosure } from '@headlessui/react'
import { NavigationItem } from '@/components/navigations/Nav'

export type NavProps = {
    items: NavigationItem[]
    textColor?: string
    iconTextColor?: string
    activeColor?: string
    logoUrl?: string
} & React.ComponentPropsWithoutRef<'nav'>

const SideNav = React.forwardRef(
    ({
        items,
        textColor = 'text-gray-700',
        activeColor = 'bg-gray-50',
        iconTextColor = 'text-gray-400',
    }: NavProps) => {
        const iconClasses = clsx('h-6 w-6 shrink-0', iconTextColor)

        return (
            <nav className="flex flex-col">
                <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                        <ul role="list" className="-mx-2 space-y-2">
                            {items.map((item) => (
                                <li key={item.name}>
                                    {!item.children ? (
                                        <a
                                            href={item.href}
                                            className={clsx(
                                                textColor,
                                                item.isCurrent
                                                    ? activeColor
                                                    : `hover:${activeColor}`,
                                                'group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6'
                                            )}
                                        >
                                            {item.icon && (
                                                <item.icon
                                                    className={iconClasses}
                                                    aria-hidden="true"
                                                />
                                            )}
                                            {item.name}
                                        </a>
                                    ) : (
                                        <Disclosure as="div">
                                            {({ open }: { open: boolean }) => (
                                                <>
                                                    <Disclosure.Button
                                                        className={clsx(
                                                            textColor,
                                                            item.isCurrent
                                                                ? 'bg-gray-50'
                                                                : 'hover:bg-gray-50',
                                                            'flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm font-semibold leading-6'
                                                        )}
                                                    >
                                                        {item.icon && (
                                                            <item.icon
                                                                className={
                                                                    iconClasses
                                                                }
                                                                aria-hidden="true"
                                                            />
                                                        )}
                                                        {item.name}
                                                        <ChevronRightIcon
                                                            className={clsx(
                                                                open
                                                                    ? 'rotate-90 text-gray-500'
                                                                    : 'text-gray-400',
                                                                'ml-auto h-5 w-5 shrink-0'
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel
                                                        as="ul"
                                                        className="mt-1 px-2"
                                                    >
                                                        {item.children?.map(
                                                            (subItem) => (
                                                                <li
                                                                    key={
                                                                        subItem.name
                                                                    }
                                                                >
                                                                    {/* 44px */}
                                                                    <Disclosure.Button
                                                                        as="a"
                                                                        href={
                                                                            subItem.href
                                                                        }
                                                                        className={clsx(
                                                                            textColor,
                                                                            subItem.isCurrent
                                                                                ? 'bg-gray-50'
                                                                                : 'hover:bg-gray-50',
                                                                            'block rounded-md py-2 pl-9 pr-2 text-sm leading-6'
                                                                        )}
                                                                    >
                                                                        {
                                                                            subItem.name
                                                                        }
                                                                    </Disclosure.Button>
                                                                </li>
                                                            )
                                                        )}
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </nav>
        )
    }
)

SideNav.displayName = 'SideNav'

export default SideNav
