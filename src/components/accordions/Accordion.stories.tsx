
import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';

const meta = {
    title: 'Forms/Accordion',
    component: Accordion,
    parameters: {
        layout: 'padded',
    },
    argTypes: {},
    tags: ['autodocs'],
} as Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>



export const Default: Story = {
    args: {
        title: "Lorem ipsum dolor sit amet, consectetur",
        maxSize: "full-lg",
        isOpen: true,
    },
    render: (args) => <Accordion {...args}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </Accordion>,
}

export const Full_Width_Extra_Large: Story = {
    args: {
        title: "Lorem ipsum dolor sit amet, consectetur ",
        maxSize: "full-xl",
    },
    render: (args) => <Accordion {...args}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

    </Accordion>,
}


export const Full_Width_Large: Story = {
    args: {
        title: "Lorem ipsum dolor sit amet, consectetur ",
        maxSize: "full-lg",
    },
    render: (args) => <Accordion {...args}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

    </Accordion>,
}

export const Full_Width_Medium: Story = {
    args: {
        title: "Lorem ipsum dolor sit amet, consectetur ",
        maxSize: "full-md",
    },
    render: (args) => <Accordion {...args}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

    </Accordion>,
}

export const Full_Width_Small: Story = {
    args: {
        title: "Lorem ipsum dolor sit amet, consectetur ",
        maxSize: "full-sm",
    },
    render: (args) => <Accordion {...args}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

    </Accordion>,
}

export const Full_Width_Extra_Small: Story = {
    args: {
        title: "Lorem ipsum dolor sit amet, consectetur ",
        maxSize: "full-xs",
    },
    render: (args) => <Accordion {...args}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

    </Accordion>,
}

export const Extra_Large: Story = {
    args: {
        title: "Lorem ipsum dolor sit amet, consectetur",
        maxSize: "xl",
    },
    render: (args) => <Accordion {...args}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </Accordion>,
}

export const Large: Story = {
    args: {
        title: "Lorem ipsum dolor sit amet, consectetur",
        maxSize: "lg",
    },
    render: (args) => <Accordion {...args}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </Accordion>,
}

export const Medium: Story = {
    args: {
        title: "Lorem ipsum dolor sit amet, consectetur ",
        maxSize: "md",
    },
    render: (args) => <Accordion {...args}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </Accordion>,
}

export const Small: Story = {
    args: {
        title: "Lorem ipsum dolor sit amet, consectetur ",
        maxSize: "sm",
    },
    render: (args) => <Accordion {...args}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </Accordion>,
}

export const Extra_Small: Story = {
    args: {
        title: "Lorem ipsum dolor sit amet, consectetur ",
        maxSize: "xs",
    },
    render: (args) => <Accordion {...args}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

    </Accordion>,
}
