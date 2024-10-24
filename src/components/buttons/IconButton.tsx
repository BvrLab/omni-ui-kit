import React, { forwardRef } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Button from '@/components/buttons/Button'
import { ButtonVariant, ColorScheme, Size } from '@/components/constant'
import { clsx } from 'clsx'

type ButtonProps = React.ComponentPropsWithoutRef<'button'> & {
    colorScheme?: ColorScheme
    size?: 'sm' | 'md' | 'lg' | 'xs' | 'xl' | 'xxxl'
    srText?: string
    icon: React.ElementType
}
const IconButton = forwardRef(
    ({ colorScheme = 'zinc', size = 'md', srText, ...props }: ButtonProps) => {
        return (
            <button
                {...props}
                className={clsx(
                    'rounded-md',
                    `text-${colorScheme}-600`,
                    `hover:bg-${colorScheme}-100 active:bg-${colorScheme}-200`,
                    'disabled:cursor-not-allowed disabled:opacity-70'
                )}
            >
                {srText && <span className="sr-only">srText</span>}
                <props.icon
                    className={clsx({
                        'h-3 w-3': size === 'xs',
                        'h-4 w-4': size === 'sm',
                        'h-5 w-5': size === 'md',
                        'h-6 w-6': size === 'lg',
                        'h-7 w-7': size === 'xl',
                        'h-8 w-8': size === 'xxxl',
                    })}
                    aria-hidden="true"
                />
            </button>
        )
    }
)

IconButton.displayName = 'IconButton'

export default IconButton
