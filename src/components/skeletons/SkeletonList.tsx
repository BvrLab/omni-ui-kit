import { clsx } from 'clsx'
import { maxWidthClass } from '@/components/constant'

type SkeletonListProps = {
    noOfRows?: number
    maxSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
}

const SkeletonList = ({ noOfRows = 5, maxSize }: SkeletonListProps) => {
    return (
        <div
            role="status"
            className={clsx(
                'flex animate-pulse flex-col gap-4 divide-y divide-gray-200 rounded dark:divide-gray-700',
                [maxSize && maxWidthClass[maxSize]]
            )}
        >
            {Array.from({ length: noOfRows }).map((_, i) => (
                <div
                    key={i}
                    className={clsx('flex items-center justify-between', {
                        'pt-4': i !== 0,
                    })}
                >
                    <div>
                        <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                        <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                    </div>
                    <div className="h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                </div>
            ))}
            <span className="sr-only">Loading...</span>
        </div>
    )
}

export default SkeletonList
