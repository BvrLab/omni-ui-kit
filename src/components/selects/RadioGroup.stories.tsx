import RadioGroup from '@/components/selects/RadioGroup'
import { Meta, StoryObj } from '@storybook/react'
import { RadioGroupOption } from '@/types'
import { useState } from 'react'

const meta = {
    title: 'Forms/RadioGroup',
    component: RadioGroup,
    argTypes: {},
    tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>

export default meta

type Story = StoryObj<typeof meta>

const options: RadioGroupOption[] = [
    {
        id: '1',
        name: 'Wade Cooper',
        value: 'Wade Cooper',
        description: 'description',
    },
    {
        id: '2',
        name: 'Arlene Mccoy',
        value: 'Wade Cooper',
        description: 'description',
    },
    {
        id: '3',
        name: 'Benxin Niu',
        value: 'Ben',
        description: 'description',
    },
]

const render = (args: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = useState<RadioGroupOption>(args.selected)
    return (
        <>
            <RadioGroup
                {...args}
                selected={selected}
                setSelected={setSelected}
            />
            {selected && (
                <p className={'mt-10'}>
                    Selected: {selected.name} ({selected.value})
                </p>
            )}
        </>
    )
}

export const Default: Story = {
    args: {
        heading: 'Heading Text',
        description: 'Description text',
        options,
    },
    render,
}
