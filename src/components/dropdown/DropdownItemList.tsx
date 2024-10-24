import React, { Fragment, useMemo } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { clsx } from 'clsx'
import { DropdownItemProps } from '@/components/dropdown/Dropdown'
import DropdownItem from '@/components/dropdown/DropdownItem'

type DropdownItemsProps = {
    items: DropdownItemProps[] | DropdownItemProps[][]
    placement: 'left' | 'right'
}

const DropdownItems = ({ items, placement }: DropdownItemsProps) => {
    const menuItems = useMemo(() => {
        return items.map((item, index) => {
            if (Array.isArray(item)) {
                return (
                    <div key={`menu-items-group-${index}`} className="py-1">
                        {item.map((subItem) => (
                            <DropdownItem key={subItem.key} {...subItem} />
                        ))}
                    </div>
                )
            }
            return <DropdownItem key={item.key} {...item} />
        })
    }, [items])

    return (
        <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items
                className={clsx(
                    'absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white',
                    'divide-y divide-gray-100',
                    'shadow-lg ring-1 ring-black ring-opacity-15 focus:outline-none',
                    {
                        'left-0': placement === 'left',
                        'right-0': placement === 'right',
                    }
                )}
            >
                {menuItems}
            </Menu.Items>
        </Transition>
    )
}

export default DropdownItems
