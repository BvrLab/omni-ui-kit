import { Meta, StoryObj } from '@storybook/react'
import Select from '@/components/selects/Select'
import { useState } from 'react'
import Image from 'next/image'
import { SelectOption } from '@/types'
import Button from '@/components/buttons/Button'

const meta = {
    title: 'Forms/Select',
    component: Select,
    argTypes: {},
    tags: ['autodocs'],
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

const options = [
    {
        id: '1',
        name: 'Wade Cooper',
        value: 'Wade Cooper',
        avatar: (
            <Image
                src={
                    'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                }
                alt={'avatar'}
                width={20}
                height={20}
                className={'flex-shrink-0 rounded-full'}
            ></Image>
        ),
    },
    {
        id: '2',
        name: 'Arlene Mccoy',
        value: 'Wade Cooper',
        avatar: (
            <Image
                src={
                    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                }
                alt={'avatar'}
                width={20}
                height={20}
                className={'flex-shrink-0 rounded-full'}
            ></Image>
        ),
    },
]

const render = (args: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = useState<SelectOption>(args.selected)
    return (
        <>
            <Select {...args} setSelected={setSelected} selected={selected} />

            {/* demo */}
            <div className={'mt-10'}>
                {selected && <p>Selected: {selected.name}</p>}
            </div>
        </>
    )
}

export const Default: Story = {
    args: {
        label: 'Label',
        options,
    },
    render,
}
export const Large: Story = {
    args: {
        label: 'Label',
        maxSize: 'lg',
        colorScheme: 'lime',
        options,
        selected: options[0],
    },
    render,
}

export const ExtraLarge: Story = {
    args: {
        label: 'Label',
        maxSize: 'xl',
        colorScheme: 'teal',
        options,
        selected: options[0],
    },
    render,
}

export const Medium: Story = {
    args: {
        label: 'Label',
        maxSize: 'md',
        colorScheme: 'zinc',
        options,
        selected: options[0],
    },
    render,
}

export const Small: Story = {
    args: {
        label: 'Label',
        maxSize: 'sm',
        colorScheme: 'red',
        options,
        selected: options[0],
    },
    render,
}

export const WithoutAvatar: Story = {
    args: {
        label: 'Label',
        options: options.map((option) => ({
            ...option,
            avatar: undefined,
        })),
    },
    render,
}

export const RequiredSelect: Story = {
    args: {
        label: 'Label',
        options,
        isRequired: true,
    },
    render: (args) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [selected, setSelected] = useState<SelectOption | undefined>(
            undefined
        )
        return (
            <>
                <Select
                    {...args}
                    setSelected={setSelected}
                    selected={selected}
                />

                {/* demo */}
                <div className={'mt-10'}>
                    {selected && <p>Selected: {selected.name}</p>}
                </div>

                <Button
                    variant={'secondary'}
                    colorScheme={'lime'}
                    onClick={() => {
                        setSelected(undefined)
                    }}
                >
                    Reset
                </Button>
            </>
        )
    },
}
