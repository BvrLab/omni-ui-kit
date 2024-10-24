import { Switch } from '@headlessui/react'
import { clsx } from 'clsx'
import { ColorScheme } from '@/components/constant'
import Flexbox from '@/components/containers/flexbox/Flexbox'
import { CheckIcon } from '@heroicons/react/24/outline'

export type ToggleProps = {
    checked?: boolean
    disabled?: boolean
    onChange?: (checked: boolean) => void
    colorScheme?: ColorScheme
    srText?: string
}

const Toggle = ({
    checked,
    disabled,
    onChange,
    srText,
    colorScheme = 'indigo',
}: ToggleProps) => {
    return (
        <Switch
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            className={clsx(
                checked ? `bg-${colorScheme}-600` : 'bg-gray-200',
                'relative inline-flex h-6 w-11 flex-shrink-0',
                'cursor-pointer rounded-full border-2 border-transparent',
                'transition-colors duration-200 ease-in-out',
                'focus:outline-none focus:ring-2 focus:ring-offset-2',
                `focus:ring-${colorScheme}-600`
            )}
        >
            <span className="sr-only">{srText}</span>
            <span
                className={clsx(
                    'transform',
                    { 'translate-x-5': checked },
                    { 'translate-x-0': !checked },
                    'pointer-events-none relative inline-block h-5 w-5',
                    'rounded-full bg-white shadow ring-0',
                    'transition duration-200 ease-in-out'
                )}
            >
                <Flexbox
                    justifyContent={'center'}
                    alignItems={'center'}
                    position={'absolute'}
                    className={clsx(
                        'h-full w-full transition-opacity',
                        { 'opacity-0 duration-100 ease-out': !checked },
                        { 'opacity-100 duration-200 ease-in': checked }
                    )}
                    aria-hidden="true"
                >
                    <CheckIcon className={`h-3 w-3 text-${colorScheme}-800`} />
                </Flexbox>
            </span>
        </Switch>
    )
}

export default Toggle
