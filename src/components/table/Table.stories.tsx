import Table from '@/components/table/Table'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'Data/Table',
    component: Table,
    argTypes: {
        columns: { control: 'object' },
        data: { control: 'object' },
        onRowClick: { action: 'row clicked' },
    },
} satisfies Meta<typeof Table>

export default meta

type Story = StoryObj<typeof meta>

const render = (args: any) => <Table {...args} />

const people = [
    {
        name: 'Lindsay Walton',
        title: 'Front-end Developer',
        email: 'lindsay.walton@example.com',
        role: 'Member',
        role2: 'Member',
    },
    {
        name: 'Ben Johnson',
        title: 'Back-end Developer',
        email: 'be@example.com',
        role: 'CEO',
    },
    {
        name: 'John Doe',
        title: 'Front-end Developer',
        email: 'fe@example.com',
        role: 'Member',
    },
]

export const Default: Story = {
    args: {
        data: people,
        columns: [
            {
                heading: 'Name',
                key: 'name',
            },
            {
                heading: 'Title',
                key: 'title',
            },
            {
                heading: 'Email',
                key: 'email',
            },
            {
                heading: 'Role',
                key: 'role',
            },
        ],
    },
    render,
}

export const WithClickableRow: Story = {
    args: {
        data: people,
        onRowClick: (cellData, rowData) =>
            alert(
                `Row clicked: cellData: ${cellData} rowData: ${JSON.stringify(
                    rowData
                )}`
            ),
        columns: [
            {
                heading: 'Name',
                key: 'name',
            },
            {
                heading: 'Title',
                key: 'title',
            },
            {
                heading: 'Email',
                key: 'email',
            },
            {
                heading: 'Role',
                key: 'role',
            },
        ],
    },
    render,
}

export const WithCustomRender: Story = {
    args: {
        data: people,
        columns: [
            {
                heading: 'Name',
                key: 'name',
                render: (cellData) => <span>{cellData.toUpperCase()}</span>,
                className: 'text-red-500',
            },
            {
                heading: 'Title',
                key: 'title',
            },
            {
                heading: 'Email',
                key: 'email',
            },
            {
                heading: 'Role',
                key: 'role',
            },
        ],
    },
    render,
}
