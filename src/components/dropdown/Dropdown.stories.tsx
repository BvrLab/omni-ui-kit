import Dropdown from '@/components/dropdown/Dropdown'
import { Meta, StoryObj } from '@storybook/react'
import {
    ArchiveBoxIcon,
    ArrowRightCircleIcon,
    DocumentDuplicateIcon,
    EllipsisVerticalIcon,
    HeartIcon,
    TrashIcon,
    UserPlusIcon,
} from '@heroicons/react/24/outline'

const meta = {
    title: 'Forms/Dropdown',
    component: Dropdown,
    argTypes: {},
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>

export default meta

type Story = StoryObj<typeof meta>

const render = (args: any) => <Dropdown {...args} />

export const WithoutGrouping: Story = {
    args: {
        title: 'Settings',
        menuPlacement: 'right',
        items: [
            {
                title: 'Item 1',
                icon: DocumentDuplicateIcon,
                onClick: () => alert('Item 1 clicked'),
            },
            {
                title: 'Item 2',
                icon: ArrowRightCircleIcon,
                onClick: () => alert('Item 2 clicked'),
            },
            { title: 'Item 3', icon: UserPlusIcon },
            { title: 'Item 4', icon: HeartIcon },
            { title: 'Item 5', icon: TrashIcon },
        ],
    },
    render,
}

export const WithGrouping: Story = {
    args: {
        title: 'Options',
        menuPlacement: 'left',
        items: [
            [
                {
                    title: 'Item 1',
                    icon: DocumentDuplicateIcon,
                    onClick: () => alert('Item 1 clicked'),
                },
            ],
            [
                {
                    title: 'Item 2',
                    icon: ArrowRightCircleIcon,
                    onClick: () => alert('Item 2 clicked'),
                },
            ],
            [
                { title: 'Item 3', icon: UserPlusIcon },
                { title: 'Item 4', icon: HeartIcon },
            ],
            [{ title: 'Item 5', icon: TrashIcon }],
        ],
    },
    render,
}

export const IconOnly: Story = {
    args: {
        showBorder: false,
        menuPlacement: 'right',
        items: [
            [
                {
                    title: 'Item 1',
                    icon: DocumentDuplicateIcon,
                    onClick: () => alert('Item 1 clicked'),
                },
            ],
            [
                {
                    title: 'Item 2',
                    icon: ArrowRightCircleIcon,
                    onClick: () => alert('Item 2 clicked'),
                },
            ],
        ],
    },
    render,
}

export const CustomIcon: Story = {
    args: {
        icon: EllipsisVerticalIcon,
        menuPlacement: 'left',
        showBorder: false,
        items: [
            [
                {
                    title: 'Item 1',
                    icon: DocumentDuplicateIcon,
                    onClick: () => alert('Item 1 clicked'),
                },
            ],
            [
                {
                    title: 'Item 2',
                    icon: ArrowRightCircleIcon,
                    onClick: () => alert('Item 2 clicked'),
                },
            ],
        ],
    },
    render,
}
