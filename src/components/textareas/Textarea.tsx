import { Size, ColorScheme } from '@/components/constant'
import React, { forwardRef, useEffect, useState } from 'react'
import { clsx } from 'clsx'

export interface InputValidatorProps {
    validatorFn: (value: string) => boolean
    errorMessage?: string
}

type TextareaProps = React.ComponentPropsWithoutRef<'textarea'> & {
    label?: string
    colorScheme?: ColorScheme
    maxSize?: Size
    isDisabled?: boolean
    isInvalid?: boolean
    errorMessage?: string
    // optional validator function
    validators?:
        | ((value: string) => boolean | string)[]
        | ((value: string) => boolean | string)
}

const sizeClasses = {
    xs: 'max-w-32',
    sm: 'max-w-48',
    md: 'max-w-64',
    lg: 'max-w-80',
    xl: 'max-w-96',
}

const Textarea = forwardRef(
    ({
        label,
        onChange,
        colorScheme = 'indigo',
        maxSize,
        isDisabled = false,
        isInvalid = false,
        errorMessage,
        validators,
        ...props
    }: TextareaProps) => {
        const [isError, setError] = useState(false)
        const [errorMessages, setErrorMessages] = useState<string[]>([])

        useEffect(() => {
            setError(isInvalid)
        }, [isInvalid])

        const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            if (validators) {
                const messages: string[] = []
                const fns = Array.isArray(validators)
                    ? validators
                    : [validators]
                fns.forEach((fn) => {
                    const result = fn(e.target.value)
                    if (typeof result === 'string') {
                        messages.push(result)
                    }
                })
                setErrorMessages(messages)
                setError(messages.length > 0)
            }
            onChange && onChange(e)
        }

        return (
            <div>
                {}
                <label className="block text-sm font-medium leading-6 text-gray-900">
                    {label}
                </label>

                <div
                    className={clsx(
                        'relative mt-2 flex',
                        maxSize && sizeClasses[maxSize]
                    )}
                >
                    {/*input control*/}
                    <textarea
                        {...props}
                        rows={4}
                        onChange={handleChange}
                        className={clsx(
                            'block w-full flex-initial',
                            'border-1 rounded-md',
                            'p-1.5 pl-3',
                            'text-gray-900',
                            'shadow-sm outline-none',
                            'ring-1 ring-inset ring-gray-300',
                            'placeholder:text-gray-400 sm:text-sm sm:leading-6',
                            `focus:ring-2 focus:ring-inset focus:ring-${colorScheme}-600`,
                            {
                                'text-red-6 ring-2 ring-red-600':
                                    isInvalid || isError,
                            },
                            [isDisabled && 'bg-gray-100 text-gray-500'],
                            props.className
                        )}
                        disabled={isDisabled}
                    />
                </div>

                {/*error message*/}
                {isError && (
                    <>
                        {errorMessages.map((message) => (
                            <p
                                key={message}
                                className="mt-2 text-sm text-red-600"
                            >
                                {message}
                            </p>
                        ))}
                    </>
                )}
            </div>
        )
    }
)

Textarea.displayName = 'Textarea'

export default Textarea
