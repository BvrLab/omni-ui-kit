import IconButton from '@/components/buttons/IconButton'
import { Meta, StoryObj } from '@storybook/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const meta = {
    title: 'Forms/IconButton',
    component: IconButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof IconButton>

export default meta

type Story = StoryObj<typeof meta>

export const XMarkIconButton: Story = {
    args: {
        colorScheme: 'zinc',
        disabled: false,
        icon: XMarkIcon,
    },
    render: (args) => (
        <>
            <IconButton {...args} />
        </>
    ),
}
