import SideNavBar from '@/components/navigations/SideNavBar'
import { Meta, StoryObj } from '@storybook/react'

import {
    CalendarIcon,
    ChartPieIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
} from '@heroicons/react/24/outline'
import { NavigationItem } from '@/components/navigations/Nav'

const meta = {
    title: 'Navigation/Side navbar',
    component: SideNavBar,
    // parameters: {
    //     controls: { expanded: true },
    // },
} satisfies Meta<typeof SideNavBar>

export default meta

type Story = StoryObj<typeof meta>

const navigations: NavigationItem[] = [
    {
        name: 'Dashboard',
        href: '#',
        icon: HomeIcon,
        isCurrent: false,
    },
    {
        name: 'Teams',
        href: '#',
        icon: UsersIcon,
        isCurrent: true,
    },
    {
        name: 'Projects',
        href: '#',
        icon: FolderIcon,
        isCurrent: false,
        children: [
            {
                name: 'Project 1',
                href: '#',
                isCurrent: false,
            },
            {
                name: 'Project 2',
                href: '#',
                isCurrent: false,
            },
        ],
    },
    {
        name: 'Calendar',
        href: '#',
        icon: CalendarIcon,
        isCurrent: false,
    },
    {
        name: 'Documents',
        href: '#',
        icon: DocumentDuplicateIcon,
        isCurrent: false,
    },
    {
        name: 'Reports',
        href: '#',
        icon: ChartPieIcon,
        isCurrent: false,
    },
]

// const render = (args: any) => (
//     <div className={'flex h-svh w-80'}>
//         <SideNavBar {...args} />
//     </div>
// )

export const Default: Story = {
    args: {
        items: navigations,
        logoUrl:
            'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600',
    },
    render: (args: any) => (
        <div className={'flex h-svh w-80'}>
            <SideNavBar {...args} />
        </div>
    ),
}

export const WithSubPanel: Story = {
    args: {
        items: navigations,
        logoUrl:
            'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600',
    },
    render: (args: any) => (
        <div className={'flex h-svh w-80'}>
            <SideNavBar {...args}>
                <p className={'text-md font-semibold text-gray-400'}>
                    Sub panel
                </p>

                <div className={'flex h-48 w-full bg-teal-600'}></div>
            </SideNavBar>
        </div>
    ),
}

export const withSubPanelAndBottomActions: Story = {
    args: {
        items: navigations,
        logoUrl:
            'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600',
    },
    render: (args: any) => (
        <div className={'flex h-svh w-80'}>
            <SideNavBar {...args}>
                <p className={'text-md font-semibold text-gray-400'}>
                    Sub panel
                </p>

                <div className={'flex h-full w-full bg-teal-600'}></div>

                <div className="-mx-6 mt-auto">
                    <a
                        href="#"
                        className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                    >
                        <img
                            className="h-8 w-8 rounded-full bg-gray-50"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                        <span className="sr-only">Your profile</span>
                        <span aria-hidden="true">Tom Cook</span>
                    </a>
                </div>
            </SideNavBar>
        </div>
    ),
}
