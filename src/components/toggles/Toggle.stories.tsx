import { Meta, StoryObj } from '@storybook/react'
import Toggle from '@/components/toggles/Toggle'
import { useState } from 'react'

const meta = {
    title: 'Forms/Toggle',
    component: Toggle,
    parameters: { layout: 'centered' },
    argTypes: {},
    tags: ['autodocs'],
} satisfies Meta<typeof Toggle>

export default meta

type Story = StoryObj<typeof meta>

const render = (args: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = useState(false)
    return <Toggle {...args} checked={checked} onChange={setChecked} />
}

export const Default: Story = {
    args: {},
    render,
}
