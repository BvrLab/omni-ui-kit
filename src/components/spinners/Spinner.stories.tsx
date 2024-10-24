import { Meta, StoryObj } from '@storybook/react'
import Spinner from './Spinner'

const meta = {
    title: 'Progress/Spinner',
    component: Spinner,
    parameters: {
        layout: 'centered',
    },
    argTypes: {},
    tags: ['autodocs'],
} satisfies Meta<typeof Spinner>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
    render: (args) => <Spinner {...args} />,
}

export const Large: Story = {
    args: {
        size: 'lg',
        color: 'lime',
    },
    render: (args) => <Spinner {...args} />,
}

export const Medium: Story = {
    args: {
        size: 'md',
        color: 'violet',
    },
    render: (args) => <Spinner {...args} />,
}

export const Small: Story = {
    args: {
        size: 'sm',
        color: 'pink',
    },
    render: (args) => <Spinner {...args} />,
}

export const DashedSpinner: Story = {
    args: {
        variant: 'dashed',
    },

    render: (args) => <Spinner {...args} />,
}

export const DashedSpinnerMedium: Story = {
    args: {
        variant: 'dashed',
        size: 'md',
        color: 'rose',
    },

    render: (args) => <Spinner {...args} />,
}

export const DashedSpinnerSmall: Story = {
    args: {
        variant: 'dashed',
        size: 'sm',
        color: 'indigo',
    },

    render: (args) => <Spinner {...args} />,
}
