import React from 'react'
import SideNav from '@/components/navigations/SideNav'
import { NavigationItem } from '@/components/navigations/Nav'
import { clsx } from 'clsx'

type SideNavBarProps = {
    items: NavigationItem[]
    logoUrl?: string
    children?: React.ReactNode
    textColorClass?: string
    iconTextColorClass?: string
    activeBackgroundClass?: string
    backgroundColorClass?: string
}

// this will be a client component if NavigationItem has children
const SideNavBar = ({
    items,
    logoUrl,
    children,
    textColorClass,
    iconTextColorClass,
    activeBackgroundClass,
    backgroundColorClass = 'bg-white',
}: SideNavBarProps) => {
    return (
        <div
            className={clsx(
                'flex flex-grow flex-col px-6',
                'border-r border-gray-200',
                'gap-y-5 overflow-y-auto',
                backgroundColorClass
            )}
        >
            <div className="flex h-16 shrink-0 items-center">
                {logoUrl && (
                    <img
                        className="h-8 w-auto"
                        src={logoUrl}
                        alt="Company Logo"
                    />
                )}
            </div>

            <SideNav
                items={items}
                textColor={textColorClass}
                iconTextColor={iconTextColorClass}
                activeColor={activeBackgroundClass}
            />

            <div className="flex flex-1 flex-col">{children}</div>
        </div>
    )
}

export default SideNavBar
