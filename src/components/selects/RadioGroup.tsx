import React, { useState } from 'react'
import { RadioGroupOption } from '@/types'
import { ColorScheme, maxWidthClass, Size } from '@/components/constant'
import { CheckCircleIcon, CheckIcon } from '@heroicons/react/24/outline'
import {
    Description,
    Label,
    RadioGroup as HeadlessRadioGroup,
} from '@headlessui/react'
import { clsx } from 'clsx'

type RadioGroupProps = {
    heading?: string
    description?: string
    options: RadioGroupOption[]
    selected?: RadioGroupOption
    setSelected: (value: RadioGroupOption) => void
    maxSize?: Size
    isInvalid?: boolean
    errorMessage?: string
    colorScheme?: ColorScheme
}

const RadioGroup = ({
    heading,
    description,
    options,
    selected = options[0],
    setSelected,
    maxSize,
    colorScheme = 'indigo',
    errorMessage = 'Invalid selection',
    isInvalid = false,
}: RadioGroupProps) => {
    return (
        <div className={clsx('w-full', [maxSize && maxWidthClass[maxSize]])}>
            <HeadlessRadioGroup value={selected} onChange={setSelected}>
                <Label className="text-md font-medium leading-6 text-gray-900">
                    {heading}
                </Label>
                <Description className="text-sm leading-6 text-gray-500">
                    {description}
                </Description>
                <div
                    className={clsx('space-y-2', {
                        'mt-2': heading || description,
                        'border-2 border-red-600 p-1': isInvalid,
                    })}
                >
                    {options.map((option) => renderOption(option, colorScheme))}
                </div>
            </HeadlessRadioGroup>
            {isInvalid && (
                <div className="mt-2 text-sm text-red-600">{errorMessage}</div>
            )}
        </div>
    )
}

const renderOption = (option: RadioGroupOption, colorScheme: ColorScheme) => {
    return (
        <HeadlessRadioGroup.Option
            key={option.name}
            value={option}
            className={({ focus, checked }) =>
                clsx(
                    {
                        'ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300':
                            focus,
                    },
                    [checked && `bg-${colorScheme}-600 text-white`],
                    'relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none'
                )
            }
        >
            {({ focus, checked }) => (
                <>
                    <div className="flex w-full items-center justify-between">
                        <div className="flex items-center">
                            <div className="text-sm">
                                <Label
                                    as="p"
                                    className={`font-medium  ${
                                        checked ? 'text-white' : 'text-gray-900'
                                    }`}
                                >
                                    {option.name}
                                </Label>
                                <Description
                                    as="span"
                                    className={`inline ${
                                        checked
                                            ? 'text-sky-100'
                                            : 'text-gray-500'
                                    }`}
                                >
                                    <span>{option.description}</span>{' '}
                                </Description>
                            </div>
                        </div>
                        {checked && (
                            <div className="shrink-0 text-white">
                                <CheckCircleIcon className="h-6 w-6" />
                            </div>
                        )}
                    </div>
                </>
            )}
        </HeadlessRadioGroup.Option>
    )
}

export default RadioGroup
