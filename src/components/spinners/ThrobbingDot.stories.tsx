import ThrobbingDot from './ThrobbingDot'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
    title: 'Progress/Pulsing Dot',
    component: ThrobbingDot,
    parameters: {
        layout: 'centered',
    },
    argTypes: {},
    tags: ['autodocs'],
} satisfies Meta<typeof ThrobbingDot>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
    render: (args) => <ThrobbingDot {...args} />,
}

export const Large: Story = {
    args: {
        size: 'lg',
        color: 'lime',
    },
    render: (args) => <ThrobbingDot {...args} />,
}

export const Medium: Story = {
    args: {
        size: 'md',
        color: 'teal',
    },
    render: (args) => <ThrobbingDot {...args} />,
}

export const Small: Story = {
    args: {
        size: 'sm',
        color: 'rose',
    },
    render: (args) => <ThrobbingDot {...args} />,
}

export const ExtraSmall: Story = {
    args: {
        size: 'xs',
        color: 'rose',
    },
    render: (args) => <ThrobbingDot {...args} />,
}
