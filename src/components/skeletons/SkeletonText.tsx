import { clsx } from 'clsx'
import React from 'react'
import { maxWidthClass } from '@/components/constant'

type SkeletonProps = {
    noOfLines?: number
    height?: string
    isLoaded?: boolean
    children?: React.ReactNode
    maxSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
}
const SkeletonText = ({
    noOfLines = 5,
    height = 'h-3',
    isLoaded = false,
    children,
    maxSize,
}: SkeletonProps) => {
    const classes = clsx(height, 'rounded-full bg-gray-200 dark:bg-gray-900')

    return isLoaded ? (
        children
    ) : (
        <div
            role="status"
            className={clsx('flex animate-pulse flex-col gap-2', [
                maxSize && maxWidthClass[maxSize],
            ])}
        >
            <div className={clsx('w-48', height, classes)}></div>
            {Array.from({ length: noOfLines - 1 }).map((_, i) => (
                <div
                    key={i}
                    className={clsx(
                        height,
                        'rounded-full bg-gray-200 dark:bg-gray-900'
                    )}
                ></div>
            ))}
            <span className="sr-only">Loading...</span>
        </div>
    )
}

export default SkeletonText
