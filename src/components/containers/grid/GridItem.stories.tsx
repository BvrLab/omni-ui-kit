import GridItem from '@/components/containers/grid/GridItem'
import { Meta, StoryObj } from '@storybook/react'
import Grid from '@/components/containers/grid/Grid'

const meta = {
    title: 'Containers/GridItem',
    component: GridItem,
    argTypes: {},
    tags: ['autodocs'],
} satisfies Meta<typeof GridItem>

export default meta

type Story = StoryObj<typeof meta>

const render = (args: any) => {
    return (
        <Grid columns={3} gap={'lg'} className={'bg-teal-600 p-10'}>
            <GridItem {...args}>01</GridItem>
            <GridItem {...args}>02</GridItem>
            <GridItem {...args}>03</GridItem>
        </Grid>
    )
}

export const Default: Story = {
    args: {
        className: 'bg-rose-300 h-20',
    },
    render,
}

export const SpanningRows: Story = {
    args: {
        className: 'bg-rose-300',
        rowSpan: 2,
    },
    render: (args) => {
        return (
            <Grid rows={3} autoFlow={'column'}>
                <GridItem {...args}>01</GridItem>
                <GridItem {...args} rowSpan={undefined}>
                    02
                </GridItem>
                <GridItem {...args} rowSpan={undefined}>
                    03
                </GridItem>
            </Grid>
        )
    },
}
