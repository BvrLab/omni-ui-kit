import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import Textarea from './Textarea'

const meta = {
    title: 'Forms/Textarea',
    component: Textarea,
    tags: ['autodocs'],
} satisfies Meta<typeof Textarea>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        placeholder: 'Enter Your Comment Here...',
        label: 'Comment:',
    },
    render: (args) => (
        <>
            <Textarea {...args} />
        </>
    ),
}

export const ExtraSmall: Story = {
    args: {
        placeholder: 'Enter Your Comment Here...',
        label: 'Comment:',
        maxSize: 'xs',
    },
    render: (args) => (
        <>
            <Textarea {...args} />
        </>
    ),
}

export const Small: Story = {
    args: {
        placeholder: 'Enter Your Comment Here...',
        label: 'Comment:',
        maxSize: 'sm',
    },
    render: (args) => (
        <>
            <Textarea {...args} />
        </>
    ),
}

export const Medium: Story = {
    args: {
        placeholder: 'Enter Your Comment Here...',
        label: 'Comment:',
        maxSize: 'md',
    },
    render: (args) => (
        <>
            <Textarea {...args} />
        </>
    ),
}

export const Large: Story = {
    args: {
        placeholder: 'Enter Your Comment Here...',
        label: 'Comment:',
        maxSize: 'lg',
    },
    render: (args) => (
        <>
            <Textarea {...args} />
        </>
    ),
}

export const ExtraLarge: Story = {
    args: {
        placeholder: 'Enter Your Comment Here...',
        label: 'Comment:',
        maxSize: 'xl',
    },
    render: (args) => (
        <>
            <Textarea {...args} />
        </>
    ),
}

export const Disabled: Story = {
    args: {
        defaultValue: 'This is a disabled textarea.',
        label: 'Comment:',
        isDisabled: true,
    },
    render: (args) => (
        <>
            <Textarea {...args} />
        </>
    ),
}

export const Invalid: Story = {
    args: {
        defaultValue: "Finley can't find a job. ",
        label: 'Comment:',
        isInvalid: true,
    },
    render: (args) => (
        <>
            <Textarea {...args} />
        </>
    ),
}

export const WithValidator: Story = {
    args: {
        placeholder: 'email',
        label: 'Email',
        validators: (value: string) => {
            if (!value.includes('@')) {
                return 'Please enter a valid email address'
            }
            return true
        },
        isInvalid: false,
    },
    render: (args) => (
        <>
            <p className={'mb-2 text-sm'}>Try entering a text without @</p>
            <Textarea {...args} />
        </>
    ),
}
