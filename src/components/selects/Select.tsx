import { Label, Listbox, Transition } from '@headlessui/react'
import React, { Fragment, useEffect } from 'react'
import { ChevronUpDownIcon } from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/24/outline'
import { clsx } from 'clsx'
import { ColorScheme, maxWidthClass, Size } from '@/components/constant'
import { SelectOption } from '@/types'

type SelectProps = React.ComponentPropsWithoutRef<'select'> & {
    label?: string
    options: SelectOption[]
    selected?: SelectOption
    setSelected?: (option: SelectOption) => void
    colorScheme?: ColorScheme
    maxSize?: Size
    isRequired?: boolean
    errorMessage?: string
}
const Select = ({
    label,
    options,
    setSelected,
    selected,
    colorScheme = 'indigo',
    maxSize,
    isRequired = false,
    errorMessage = 'This field is required',
}: SelectProps) => {
    const [isError, setError] = React.useState(false)

    const handleChange = (option: SelectOption) => {
        setSelected && setSelected(option)
        setError(false)
    }

    const renderOption = (option: SelectOption, colorScheme: string) => {
        return (
            <Listbox.Option
                key={option.id}
                className={({ focus: isFocused }) =>
                    clsx(
                        'relative cursor-default select-none py-2 pl-3 pr-9',
                        'text-gray-900',
                        [isFocused && `bg-${colorScheme}-600 text-white`]
                    )
                }
                value={option}
            >
                {/* Option display name and avatar */}
                {({ selected: isSelected, focus: isFocused }) => (
                    <>
                        <div className="flex items-center">
                            {option.avatar}
                            <span
                                className={clsx(
                                    'font-normal',
                                    'block truncate',
                                    [option.avatar && 'ml-3'],
                                    [isSelected && 'font-semibold']
                                )}
                            >
                                {option.name}
                            </span>
                        </div>

                        {/* Check Icon */}
                        {isSelected && (
                            <span
                                className={clsx(
                                    'absolute inset-y-0 right-0 flex items-center pr-4',
                                    [isFocused && 'text-white']
                                )}
                            >
                                <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                />
                            </span>
                        )}
                    </>
                )}
            </Listbox.Option>
        )
    }

    return (
        <>
            <Listbox value={selected} onChange={handleChange}>
                {({ open }) => (
                    <>
                        <Label className="block text-sm font-medium leading-6 text-gray-900">
                            {label}
                        </Label>
                        <div className="relative mt-2">
                            <Listbox.Button
                                onBlur={() => {
                                    if (isRequired && !selected) {
                                        setError(true)
                                    }
                                }}
                                className={clsx(
                                    'relative min-h-10 w-full cursor-default rounded-md bg-white',
                                    [maxSize && maxWidthClass[maxSize]],
                                    'py-1.5 pl-3 pr-10',
                                    'text-left text-gray-900 shadow-sm',
                                    `focus:outline-none focus:ring-2 focus:ring-${colorScheme}-500`,
                                    'ring-1 ring-inset ring-gray-300',
                                    [isError && 'ring-1 ring-red-600'],
                                    'sm:text-sm sm:leading-6'
                                )}
                            >
                                {selected && (
                                    <span className="flex items-center">
                                        {selected.avatar}
                                        <span
                                            className={clsx(
                                                [selected.avatar && 'ml-3'],
                                                'block truncate'
                                            )}
                                        >
                                            {selected.name}
                                        </span>
                                    </span>
                                )}

                                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                    <ChevronUpDownIcon
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>

                            <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options
                                    className={clsx(
                                        'absolute z-10 mt-1 max-h-56',
                                        'w-full overflow-auto rounded-md bg-white text-base shadow-lg focus:outline-none',
                                        [maxSize && maxWidthClass[maxSize]],
                                        'py-1',
                                        'ring-1 ring-black ring-opacity-5',
                                        'sm:text-sm'
                                    )}
                                >
                                    {options.map((option) =>
                                        renderOption(option, colorScheme)
                                    )}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </>
                )}
            </Listbox>

            {/* error message */}
            {isError && (
                <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
            )}
        </>
    )
}

export default Select
