import ThrobbingPing from './ThrobbingPing'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'Progress/Pulsing Ping',
    component: ThrobbingPing,
    parameters: {
        layout: 'centered',
    },
    argTypes: {},
    tags: ['autodocs'],
} satisfies Meta<typeof ThrobbingPing>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
    render: (args) => <ThrobbingPing {...args} />,
}

export const Large: Story = {
    args: {
        size: 'lg',
        color: 'lime',
    },
    render: (args) => <ThrobbingPing {...args} />,
}

export const Medium: Story = {
    args: {
        size: 'md',
        color: 'teal',
    },
    render: (args) => <ThrobbingPing {...args} />,
}

export const Small: Story = {
    args: {
        size: 'sm',
        color: 'rose',
    },
    render: (args) => <ThrobbingPing {...args} />,
}

export const ExtraSmall: Story = {
    args: {
        size: 'xs',
        color: 'rose',
    },
    render: (args) => <ThrobbingPing {...args} />,
}
