import { Menu } from '@headlessui/react'
import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { clsx } from 'clsx'
import DropdownItemList from '@/components/dropdown/DropdownItemList'
import { ColorScheme } from '@/components/constant'

export type DropdownItemProps = React.ComponentPropsWithoutRef<'button'> & {
    id?: string
    icon?: React.ElementType
    title: string
}

export type DropdownProps = {
    items: DropdownItemProps[] | DropdownItemProps[][]
    icon?: React.ElementType
    title?: string
    colorScheme?: ColorScheme
    showBorder?: boolean
    menuPlacement: 'right' | 'left'
}

const Dropdown = ({
    items,
    title,
    showBorder = true,
    colorScheme = 'gray',
    menuPlacement,
    ...props
}: DropdownProps) => {
    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button
                className={clsx(
                    'inline-flex w-full justify-center gap-x-1.5 rounded-md',
                    'px-3 py-2 text-sm font-semibold',
                    `text-${colorScheme}-900`,
                    `hover:bg-${colorScheme}-100 active:bg-${colorScheme}-200`,
                    {
                        'ring-1 ring-black ring-opacity-15': showBorder,
                        'shadow-sm': showBorder,
                    }
                )}
            >
                {title}
                {props.icon && (
                    <props.icon
                        className={clsx(
                            'h-6 w-6 text-center',
                            { '-mr-1': title },
                            `text-${colorScheme}-600`
                        )}
                        aria-hidden="true"
                    />
                )}
                {!props.icon && (
                    <ChevronDownIcon
                        className={clsx(
                            'h-5 w-5 text-center',
                            `text-${colorScheme}-600`
                        )}
                        aria-hidden="true"
                    />
                )}
            </Menu.Button>
            <DropdownItemList placement={menuPlacement} items={items} />
        </Menu>
    )
}

export default Dropdown
