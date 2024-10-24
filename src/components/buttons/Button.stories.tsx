import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

const meta = {
    title: 'Forms/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    argTypes: {
        // variant: { control: '' },
    },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

const renderAllSizes = (args: any) => {
    const sizes = ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', undefined]
    return (
        <div className={'mt-5 flex flex-col gap-5'}>
            {sizes.map((size) => (
                <div key={size} className={'flex w-full flex-col items-center'}>
                    <Button {...args} size={size} key={size}>
                        Button
                    </Button>
                    <p className={'mt-2 text-xs text-gray-400'}>
                        size: {size ?? 'full width by default'}
                    </p>
                </div>
            ))}
        </div>
    )
}

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        variant: 'primary',
        colorScheme: 'teal',
        disabled: false,
    },
    render: (args) => renderAllSizes(args),
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        disabled: false,
    },
    render: (args) => renderAllSizes(args),
}

export const Tertiary: Story = {
    args: {
        variant: 'tertiary',
        disabled: false,
    },
    render: (args) => renderAllSizes(args),
}

export const PrimaryWithLoadingState: Story = {
    args: {
        variant: 'primary',
        colorScheme: 'teal',
        isLoading: true,
        loadingText: 'Please wait...',
        disabled: false,
    },
    render: (args) => renderAllSizes(args),
}

export const SecondaryWithLoadingState: Story = {
    args: {
        variant: 'secondary',
        colorScheme: 'teal',
        isLoading: true,
        loadingText: 'Loading text...',
        disabled: false,
    },
    render: (args) => renderAllSizes(args),
}

export const TertiaryWithLoadingState: Story = {
    args: {
        variant: 'tertiary',
        colorScheme: 'teal',
        isLoading: true,
        loadingText: 'Stupid...',
        disabled: false,
    },
    render: (args) => renderAllSizes(args),
}

export const CustomLoadingIcon: Story = {
    args: {
        variant: 'primary',
        colorScheme: 'teal',
        isLoading: true,
        loadingText: 'Loading...',
        loadingIcon: <div>👋</div>,
        disabled: false,
    },
    render: (args) => renderAllSizes(args),
}
