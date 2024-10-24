import BreadCrumb from '@/components/breadcrumbs/BreadCrumb'
import { Meta, StoryObj } from '@storybook/react'
import { HomeIcon } from '@heroicons/react/16/solid'
import { HomeModernIcon } from '@heroicons/react/24/solid'

const meta = {
    title: 'Navigation/BreadCrumb',
    component: BreadCrumb,
    tags: ['autodocs'],
} satisfies Meta<typeof BreadCrumb>

export default meta

type Story = StoryObj<typeof meta>

const render = (args: any) => <BreadCrumb {...args} />

export const Default: Story = {
    args: {
        homeIcon: HomeIcon,
        crumbs: [
            { name: 'Projects', href: '#', current: false },
            { name: 'Project Nero', href: '#', current: true },
        ],
    },
    render,
}

export const WithCustomHomeIcon: Story = {
    args: {
        homeIcon: HomeModernIcon,
        crumbs: [
            { name: 'Projects', href: '#', current: false },
            { name: 'Project Nero', href: '#', current: true },
        ],
    },
    render,
}
