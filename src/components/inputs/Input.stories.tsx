import { Meta, StoryObj } from '@storybook/react'
import Input from '@/components/inputs/Input'
import React, { useState } from 'react'
import { CheckIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'

const meta = {
    title: 'Forms/Input',
    component: Input,
    // parameters: {
    //     layout: 'centered',
    // },
    tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        placeholder: 'name',
        label: 'Name',
    },
    render: (args) => (
        <>
            <Input {...args} />
        </>
    ),
}

export const ExtraSmall: Story = {
    args: {
        placeholder: 'name',
        label: 'Name',
        maxSize: 'xs',
    },
    render: (args) => (
        <>
            <Input {...args} />
        </>
    ),
}

export const Small: Story = {
    args: {
        placeholder: 'name',
        label: 'Name',
        maxSize: 'sm',
    },
    render: (args) => (
        <>
            <Input {...args} />
        </>
    ),
}

export const Medium: Story = {
    args: {
        placeholder: 'name',
        label: 'Name',
        maxSize: 'md',
    },
    render: (args) => (
        <>
            <Input {...args} />
        </>
    ),
}

export const Large: Story = {
    args: {
        placeholder: 'name',
        label: 'Name',
        maxSize: 'lg',
    },
    render: (args) => (
        <>
            <Input {...args} />
        </>
    ),
}

export const WithError: Story = {
    args: {
        placeholder: 'name',
        label: 'Name',
        isInvalid: true,
        errorMessage: 'This field is required',
    },
    render: (args) => (
        <>
            <Input {...args} />
        </>
    ),
}

export const WithValidator: Story = {
    args: {
        placeholder: 'email',
        label: 'Email',
        validators: (value: string) => {
            if (value.includes('@')) {
                return true
            }
            return 'Please enter a valid email'
        },
    },
    render: (args) => {
        return (
            <>
                <p className={'mb-2 text-sm'}>Try entering a text without @</p>
                <Input {...args} />
            </>
        )
    },
}

export const WithLeadingAndTrailingIcon: Story = {
    args: {
        placeholder: 'Email',
        label: 'Email',
        maxSize: 'lg',
        leadingIcon: (
            <CurrencyDollarIcon
                className={'h-6 w-6 text-gray-500'}
            ></CurrencyDollarIcon>
        ),
        trailingIcon: (
            <CheckIcon className={'h-6 w-6 text-gray-500'}></CheckIcon>
        ),
    },
    render: (args) => (
        <>
            <Input {...args} />
        </>
    ),
}
