import React, { Fragment, useMemo } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { clsx } from 'clsx'
import { DropdownItemProps } from '@/components/dropdown/Dropdown'

const DropdownItem = (props: DropdownItemProps) => {
    return (
        <Menu.Item>
            {({ focus }) => (
                <button
                    {...props}
                    className={clsx(
                        'w-full',
                        focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'group flex items-center px-4 py-2 text-sm'
                    )}
                >
                    {props.icon && (
                        <props.icon
                            className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                        />
                    )}
                    {props.title}
                </button>
            )}
        </Menu.Item>
    )
}

export default DropdownItem
