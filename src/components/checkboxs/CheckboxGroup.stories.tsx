import type { Meta, StoryObj } from '@storybook/react';
import React from 'react'
import { useState } from 'react'
import CheckboxGroup from './CheckboxGroup';
import { CheckboxGroupOption } from '@/types';

const meta = {
    title: 'Forms/CheckboxGroup',
    component: CheckboxGroup,
    tags: ['autodocs'],
} satisfies Meta<typeof CheckboxGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        options: [
            {
                id: '1',
                name: 'Wade Cooper',
                value: 'Wade Cooper',
                description: 'description',
                isSelected: true,
            },
            {
                id: '2',
                name: 'Arlene Mccoy',
                value: 'Wade Cooper',
                description: 'description',
                isSelected: false,
            },
            {
                id: '3',
                name: 'Benxin Niu',
                value: 'Ben',
                description: 'description',
                isSelected: false,
            },
            {
                id: '4',
                name: 'Finley',
                value: 'Fin',
                description: 'This is a long description, but it should be truncated, so it should be fine, right? if not, then we have a problem, but we will fix it later. For now, we will just keep typing and typing.',
                isSelected: true,
            },
        ],
        colorScheme: 'indigo',
    },


    render: (args) => {
        const [options, setOptions] = useState<CheckboxGroupOption[]>(args.options);

        const handleChange = (options: CheckboxGroupOption[]) => {
            setOptions(options);
        };

        return (
            <>
                <CheckboxGroup {...args} onChange={handleChange} />
                <p className='pt-5'>Selected options: {options.filter(option => option.isSelected).map(option => option.name).join(', ')}</p>
            </>
        );
    },
};

export const Disabled: Story = {
    args: {
        options: [
            {
                id: '1',
                name: 'Wade Cooper',
                value: 'Wade Cooper',
                description: 'description',
                isSelected: false,
            },
            {
                id: '2',
                name: 'Arlene Mccoy',
                value: 'Wade Cooper',
                description: 'description',
                isSelected: false,
            },
            {
                id: '3',
                name: 'Benxin Niu',
                value: 'Ben',
                description: 'description',
                isSelected: false,
            },
            {
                id: '4',
                name: 'Finley',
                value: 'Fin',
                description: 'This is a long description, but it should be truncated, so it should be fine, right? if not, then we have a problem, but we will fix it later. For now, we will just keep typing and typing.',
                isSelected: true,
            },
        ],
        colorScheme: 'indigo',
        isDisabled: true,
    },

    render: (args) => {
        return (
            <>
                <CheckboxGroup {...args}/>
            </>
        );
    }
};

export const Pink: Story = {
    args: {
        options: [
            {
                id: '1',
                name: 'Wade Cooper',
                value: 'Wade Cooper',
                description: 'description',
                isSelected: true,
            },
            {
                id: '2',
                name: 'Arlene Mccoy',
                value: 'Wade Cooper',
                description: 'description',
                isSelected: false,
            },
            {
                id: '3',
                name: 'Benxin Niu',
                value: 'Ben',
                description: 'description',
                isSelected: false,
            },
            {
                id: '4',
                name: 'Finley',
                value: 'Fin',
                description: 'This is a long description, but it should be truncated, so it should be fine, right? if not, then we have a problem, but we will fix it later. For now, we will just keep typing and typing.',
                isSelected: true,
            },
        ],
        colorScheme: 'pink',
    },

    render: (args) => {
        return (
            <>
                <CheckboxGroup {...args}/>
            </>
        );
    }
};