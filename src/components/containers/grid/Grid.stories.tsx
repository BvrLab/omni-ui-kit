import Grid from '@/components/containers/grid/Grid'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import FlexItem from '@/components/containers/flexbox/FlexItem'

const meta = {
    title: 'Containers/Grid',
    component: Grid,
    argTypes: {},
    tags: ['autodocs'],
} satisfies Meta<typeof Grid>

export default meta

type Story = StoryObj<typeof meta>

const render = (args: any) => {
    const itemClasses = 'h-10 w-20 rounded-lg bg-teal-600 shadow-lg text-white'
    return (
        <Grid {...args}>
            <FlexItem className={itemClasses}>01</FlexItem>
            <FlexItem className={itemClasses}>02</FlexItem>
            <FlexItem className={itemClasses}>03</FlexItem>
            <FlexItem className={itemClasses}>04</FlexItem>
            <FlexItem className={itemClasses}>05</FlexItem>
        </Grid>
    )
}

export const Default: Story = {
    args: {
        className: 'bg-rose-300 h-96 w-96',
        columns: 2,
        rows: 2,
        gap: 'md',
    },
    render,
}
