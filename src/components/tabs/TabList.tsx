import React from 'react'
import { TabListOption } from '@/types'
import { ColorScheme } from '../constant'
import { clsx } from 'clsx'

type TabsListProps = {
    tabs: TabListOption[]
    setTabs: React.Dispatch<React.SetStateAction<TabListOption[]>>
    colorScheme?: ColorScheme
}

// Should not be used directly, but through Tabs component.
const TabList = ({ colorScheme, tabs, setTabs }: TabsListProps) => {
    const handleTabsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedIndex = event.target.selectedIndex
        setTabs(
            tabs.map((tab, index) => {
                return { ...tab, current: index === selectedIndex }
            })
        )
    }

    return (
        <div>
            {/* Small Screen Use Selection*/}
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>
                <select
                    id="tabs"
                    name="tabs"
                    className={clsx(
                        'block w-full',
                        'rounded-md border-gray-300',
                        `focus:border-${colorScheme}-500 focus:ring-${colorScheme}-500`
                    )}
                    defaultValue={tabs.find((tab) => tab.current)?.name}
                    onChange={handleTabsChange}
                >
                    {tabs.map((tab) => (
                        <option key={tab.name}>{tab.name}</option>
                    ))}
                </select>
            </div>

            {/* Large Screen Use Button */}
            <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        {tabs.map((tab) => (
                            <button
                                key={tab.name}
                                onClick={() => {
                                    handleTabsChange({
                                        target: {
                                            selectedIndex: tabs.indexOf(tab),
                                        },
                                    } as any)
                                }}
                                className={clsx(
                                    tab.current
                                        ? `border-${colorScheme}-500 text-${colorScheme}-600`
                                        : `border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700`,
                                    'group inline-flex items-center border-b-2 px-1 py-4 text-sm font-medium'
                                )}
                                aria-current={tab.current ? 'page' : undefined}
                            >
                                {tab.icon && (
                                    <tab.icon
                                        className={clsx(
                                            tab.current
                                                ? `text-${colorScheme}-500`
                                                : 'text-gray-400 group-hover:text-gray-500',
                                            '-ml-0.5 mr-2 h-5 w-5'
                                        )}
                                        aria-hidden="true"
                                    />
                                )}
                                <span>{tab.name}</span>
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default TabList
