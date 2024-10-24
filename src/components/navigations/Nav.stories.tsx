import Nav from '@/components/navigations/Nav'
import { Meta, StoryObj } from '@storybook/react'
import { NavigationItem } from '@/components/navigations/Nav'
import {
    CalendarIcon,
    ChartPieIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
} from '@heroicons/react/24/outline'

const meta = {
    title: 'Navigation/Nav',
    component: Nav,
} satisfies Meta<typeof Nav>

export default meta

type Story = StoryObj<typeof meta>

const render = (args: any) => <Nav {...args} />

const navigations: NavigationItem[] = [
    {
        name: 'Dashboard',
        href: '#',
        icon: HomeIcon,
        isCurrent: true,
    },
    {
        name: 'Teams',
        href: '#',
        icon: UsersIcon,
        isCurrent: false,
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

export const Default: Story = {
    args: {
        items: navigations,
        logoUrl:
            'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600',
    },
    render,
}
