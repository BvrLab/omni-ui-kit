import ToggleGroup from '@/components/toggles/ToggleGroup'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

const meta = {
    title: 'Forms/ToggleGroup',
    component: ToggleGroup,
    argTypes: {},
    tags: ['autodocs'],
} satisfies Meta<typeof ToggleGroup>

export default meta

type Story = StoryObj<typeof meta>

const render = (args: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = useState(false)
    return (
        <div className={'w-full max-w-screen-lg'}>
            <ToggleGroup {...args} checked={checked} onChange={setChecked} />
        </div>
    )
}

export const WithLeftLabelAndDescription: Story = {
    args: {
        label: 'Turn me on',
        description: 'You dirty pervert',
        labelPlacement: 'left',
    },
    render,
}

export const WithRightLabelAndDescription: Story = {
    args: {
        label: 'Turn me on',
        description: 'You dirty pervert',
        labelPlacement: 'right',
    },
    render,
}

export const WithoutDescription: Story = {
    args: {
        label: 'Turn me on',
        labelPlacement: 'right',
    },
    render,
}
