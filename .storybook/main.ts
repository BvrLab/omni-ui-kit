import type { StorybookConfig } from '@storybook/nextjs'
import path from 'path'

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    staticDirs: ['../public'],
    webpackFinal: async (config) => {
        if (!config.resolve) {
            config.resolve = {}
        }
        config.resolve.alias = {
            ...config.resolve.alias,
            '@/components': path.resolve(__dirname, '../src/components'),
        }

        return config
    },
}
export default config
