import SideNav, { NavigationItem } from '@/components/navigations/SideNav'
import { Meta, StoryObj } from '@storybook/react'
import {
    CalendarIcon,
    ChartPieIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
} from '@heroicons/react/24/outline'

const meta = {
    title: 'Navigation/Side nav',
    component: SideNav,
} satisfies Meta<typeof SideNav>

export default meta

type Story = StoryObj<typeof meta>

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

const render = (args: any) => (
    <div className={'w-80'}>
        <SideNav {...args} />
    </div>
)

export const Default: Story = {
    args: {
        items: navigations,
    },
    render,
}
